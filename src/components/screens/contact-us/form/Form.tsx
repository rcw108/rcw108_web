"use client";

import { FC, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "./form.module.scss";

interface IForm {
  email: string;
  description: string;
}

interface IResp {
  message: string;
}

const Form: FC = () => {
  const [response, setResponse] = useState<IResp>({ message: "" });

  const schema = yup
    .object({
      email: yup.string().email().required(),
      description: yup.string().required(),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<IForm> = async (data) => {
    const jsonData = JSON.stringify(data);

    const res = await fetch("https://rcw108.com/wp-json/wp/v2/contact-form", {
      method: "POST",
      body: jsonData,
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const resp = await res.json();

    setResponse(resp);
  };

  return (
    <section className={styles.form}>
      {response.message.length ? (
        <div>
          <div>Success</div>
          <div onClick={() => setResponse({ message: "" })}>
            Send another message
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            <input
              className={styles.input}
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span>This field is required</span>}
          </label>

          <label htmlFor="description" className={styles.descr}>
            <textarea
              className={styles.input}
              placeholder="Project Details"
              {...register("description", { required: true })}
            />
            {errors.description && <span>This field is required</span>}
          </label>

          <div className={styles.btns}>
            <button type="submit" className={styles.btn}>
              <span>Send</span>
            </button>
          </div>
        </form>
      )}
    </section>
  );
};

export default Form;
