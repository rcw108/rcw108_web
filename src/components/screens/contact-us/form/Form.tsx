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
  const [sendError, setSendError] = useState(false);

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

    const res = await fetch(
      "https://rcw108.com/dev/wp-json/wp/v2/contact-form",
      {
        method: "POST",
        body: jsonData,
        headers: { "Content-Type": "application/json" },
      }
    );

    if (!res.ok) {
      setSendError(true);
      throw new Error("Failed to fetch data");
    }

    const resp = await res.json();

    setResponse(resp);
  };

  return (
    <section className={styles.form}>
      {response.message.length ? (
        <div>
          <div className={styles.resp}>Success</div>
          <div onClick={() => setResponse({ message: "" })} className={styles.respBtn}>
            <span>Send another message</span>
          </div>
        </div>
      ) : sendError ? (
        <div>
          <div className={styles.resp}>Error</div>
          <div onClick={() => setSendError(false)} className={styles.respBtn}><span>Try again</span></div>
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
