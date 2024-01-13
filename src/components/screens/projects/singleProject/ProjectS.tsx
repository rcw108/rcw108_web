"use client";

import { ProjectData } from "@/interfaces/project.interface";
import { FC, PropsWithChildren, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import styles from "./singleProject.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface IProj {
  project: ProjectData;
  nextProj: ProjectData;
}

const ProjectS: FC<PropsWithChildren<IProj>> = ({ project, nextProj }) => {

  // console.log(project);

  const titleRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const hourRef = useRef<HTMLDivElement>(null);
  const taskTitleRef = useRef<HTMLDivElement>(null);
  const taskDescrRef = useRef<HTMLDivElement>(null);
  const devTitleRef = useRef<HTMLDivElement>(null);
  const devImgRef = useRef<HTMLDivElement>(null);
  const devTextRef = useRef<HTMLDivElement>(null);
  const respTitleRef = useRef<HTMLDivElement>(null);
  const respDescrRef = useRef<HTMLDivElement>(null);
  const respImgRef = useRef<HTMLDivElement>(null);
  const testingTitleRef = useRef<HTMLDivElement>(null);
  const testingDescrRef = useRef<HTMLDivElement>(null);
  const supTitleRef = useRef<HTMLDivElement>(null);
  const supDescrRef = useRef<HTMLDivElement>(null);
  const supImgRef = useRef<HTMLDivElement>(null);
  const supTextRef = useRef<HTMLDivElement>(null);
  const manageRef = useRef<HTMLDivElement>(null);
  const manageTitleRef = useRef<HTMLDivElement>(null);
  const manageDescrRef = useRef<HTMLDivElement>(null);
  const testBlocksRef = useRef<HTMLDivElement>(null);
  const projBlocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // title
    if (titleRef.current) {
      gsap.from(titleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 100%", // Adjust as needed
          onEnter: () => {
            gsap.to(titleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (taskTitleRef.current) {
      gsap.from(taskTitleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: taskTitleRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(taskTitleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (devTitleRef.current) {
      gsap.from(devTitleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: devTitleRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(devTitleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (testingTitleRef.current) {
      gsap.from(testingTitleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: testingTitleRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(testingTitleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (respTitleRef.current) {
      gsap.from(respTitleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: respTitleRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(respTitleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (supTitleRef.current) {
      gsap.from(supTitleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: supTitleRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(supTitleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (manageTitleRef.current) {
      gsap.from(manageTitleRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: manageTitleRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(manageTitleRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    // descr
    if (taskDescrRef.current) {
      gsap.from(taskDescrRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: taskDescrRef.current,
          start: "top 100%", // Adjust as needed
          onEnter: () => {
            gsap.to(taskDescrRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (devTextRef.current) {
      gsap.from(devTextRef.current, {
        opacity: 0,
        duration: 2,
        x: "100%",
        scrollTrigger: {
          trigger: devTextRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(devTextRef.current, {
              opacity: 1,
              duration: 2,
              x: "0%",
            });
          },
        },
      });
    }
    if (testingDescrRef.current) {
      gsap.from(testingDescrRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: testingDescrRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(testingDescrRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (respDescrRef.current) {
      gsap.from(respDescrRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: respDescrRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(respDescrRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (supDescrRef.current) {
      gsap.from(supDescrRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: supDescrRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(supDescrRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (manageDescrRef.current) {
      gsap.from(manageDescrRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: manageDescrRef.current,
          start: "top 1500", // Adjust as needed
          onEnter: () => {
            gsap.to(manageDescrRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    // hour
    if (hourRef.current) {
      gsap.from(hourRef.current, {
        opacity: 0,
        duration: 2,
        delay: 1,
        scrollTrigger: {
          trigger: hourRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(hourRef.current, {
              opacity: 1,
              duration: 2,
              delay: 1,
            });
          },
        },
      });
    }
    // devImg
    if (devImgRef.current) {
      gsap.from(devImgRef.current, {
        opacity: 0,
        duration: 2,
        x: "-100%",
        scrollTrigger: {
          trigger: devImgRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(devImgRef.current, {
              opacity: 1,
              duration: 2,
              x: "0%",
            });
          },
        },
      });
    }
    //manageRef
    if (manageRef.current) {
      gsap.from(manageRef.current, {
        opacity: 0,
        duration: 2,
        x: "-100%",
        scrollTrigger: {
          trigger: manageRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(manageRef.current, {
              opacity: 1,
              duration: 2,
              x: "0%",
            });
          },
        },
      });
    }
    //sup
    if (supImgRef.current) {
      gsap.from(supImgRef.current, {
        opacity: 0,
        duration: 2,
        x: "100%",
        scrollTrigger: {
          trigger: supImgRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(supImgRef.current, {
              opacity: 1,
              duration: 2,
              x: "0%",
            });
          },
        },
      });
    }
    if (supTextRef.current) {
      gsap.from(supTextRef.current, {
        opacity: 0,
        duration: 2,
        x: "-100%",
        scrollTrigger: {
          trigger: supTextRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(supTextRef.current, {
              opacity: 1,
              duration: 2,
              x: "0%",
            });
          },
        },
      });
    }
    //respImg
    if (respImgRef.current) {
      gsap.from(respImgRef.current, {
        opacity: 0,
        duration: 1,
        y: "100%",
        scrollTrigger: {
          trigger: respImgRef.current,
          start: "top 1200", // Adjust as needed
          onEnter: () => {
            gsap.to(respImgRef.current, {
              opacity: 1,
              duration: 1,
              y: "0%",
            });
          },
        },
      });
    }

    if (testBlocksRef.current) {
      gsap.from(testBlocksRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: testBlocksRef.current,
          start: "top 90%", // Adjust as needed
          onEnter: () => {
            gsap.to(testBlocksRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
    if (projBlocksRef.current) {
      gsap.from(projBlocksRef.current, {
        opacity: 0,
        x: -15,
        y: 30,
        transformOrigin: "bottom left",
        duration: 1,
        scrollTrigger: {
          trigger: projBlocksRef.current,
          start: "top 85%", // Adjust as needed
          onEnter: () => {
            gsap.to(projBlocksRef.current, {
              opacity: 1,
              duration: 1,
              x: 0,
              y: 0,
              scale: 1,
            });
          },
        },
      });
    }
  }, []);

  const h4ContentRegex = /<h4>(.*?)<\/h4>/;
  const match = project?.acf?.description_dv?.match(h4ContentRegex);

  const h4Content = match ? match[1] : "";
  const remainingContent = project?.acf?.description_dv?.replace(
    h4ContentRegex,
    ""
  );

  const pContentRegex = /<p>(.*?)<\/p>/;
  const pMatch = project.acf?.text_mn.match(pContentRegex);

  const pContent = pMatch ? pMatch[1] : "";

  const remainingPContent = project.acf?.text_mn.replace(pContentRegex, "");

  const liContentRegex = /<li>(.*?)<\/li>/gs;
  const LiMatches = remainingPContent?.match(liContentRegex);

  const liContents =
    LiMatches && LiMatches.map((match) => match.replace(/<\/?li>/g, ""));

  return (
    <>
      {project && (
        <section className={styles.single}>
          {project.acf && (
            <div className={styles.headSection}>
              <div className="container">
                <h1 className={styles.title} ref={titleRef}>
                  {project?.title?.rendered?.replace(/&#8211;/g, "-")}
                </h1>
                <div className={styles.topImgOwn} ref={imgRef}>
                  <Image
                    src={project?.acf?.logo_company}
                    alt={project?.title?.rendered}
                    width={261}
                    height={57}
                    loading="lazy"
                  />
                </div>
                <div className={styles.hourWrap} ref={hourRef}>
                  {project?.acf?.informations &&
                    project?.acf?.informations.map((item, index) => {
                      return (
                        <div key={index} className={styles.hourBlock}>
                          <h3 className={styles.hourTitle}>
                            {`${item.number}`} <span>{item.subnumber}</span>
                          </h3>
                          <p className={styles.hourDescr}>{item.text}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}
          {project.acf.title_mn !== "" || project.acf.text_mn !== undefined && (
            <div className={styles.mainTask}>
              <div className="container">
                <h3 className={styles.taskTitle} ref={taskTitleRef}>
                  {project.acf.title_tas}
                </h3>
                <p className={styles.taskDescr} ref={taskDescrRef}>
                  {project.acf.description_tas}
                </p>
                <div className={styles.view}>
                  <div className={styles.viewBox}>
                    <Image
                      src={project.acf.image_ts}
                      alt={project.acf.title_tas}
                      width={261}
                      height={57}
                      layout="responsive"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {project?.acf?.title_dv && (
            <div className={styles.dev}>
              <div className="container">
                <h3 className={styles.devTitle} ref={devTitleRef}>
                  {project.acf.title_dv}
                </h3>
                <div className={styles.devWrap}>
                  <div className={styles.devImg} ref={devImgRef}>
                    <Image
                      src={project.acf.image_dv}
                      alt={project.acf.title_dv}
                      width={300}
                      height={200}
                      layout="responsive"
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.devDescr} ref={devTextRef}>
                    <h4 className={styles.devDescrTitle}>{h4Content}</h4>
                    {remainingContent
                      .replace(/<\/?p>/g, "")
                      .replace(/&nbsp;/g, "")
                      .replace(/<\/?li>/g, "")
                      .replace(/<\/?ul>/g, "")
                      .replace(/<\/?b>/g, "")}
                  </div>
                </div>
              </div>
            </div>
          )}

          {project?.acf?.title_res && (
            <div className={styles.resp}>
              <div className="container">
                <h3 className={styles.respTitle} ref={respTitleRef}>
                  {project.acf?.title_res}
                </h3>
                <p className={styles.respDescr} ref={respDescrRef}>
                  {project.acf?.description_res}
                </p>
                <div className={styles.respWrap} ref={respImgRef}>
                  {project.acf.images_res &&
                    project.acf.images_res.map((item, index) => {
                      return (
                        <div className={styles.resImg} key={index}>
                          <Image
                            src={item.url}
                            alt={item.alt}
                            width={300}
                            height={250}
                            loading="lazy"
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          )}

          {project?.acf?.title_ts && (
            <div className={styles.testing}>
              <div className="container">
                <h3 className={styles.testingTitle} ref={testingTitleRef}>
                  {project.acf?.title_ts}
                </h3>
                <p className={styles.testingDescr} ref={testingDescrRef}>
                  {project.acf?.description_ts}
                </p>
                <div className={styles.testingWrap} ref={testBlocksRef}>
                  {project.acf.tools
                    ? project.acf.tools.map((item, index) => {
                        const h4ContentRegex = /<h4>(.*?)<\/h4>/;
                        const match = item.list.match(h4ContentRegex);

                        const h4Content = match ? match[1] : "";

                        const remainingContent = item.list.replace(
                          h4ContentRegex,
                          ""
                        );

                        const liContentRegex = /<li>(.*?)<\/li>/gs;
                        const matches = remainingContent.match(liContentRegex);

                        const liContents = matches
                          ? matches.map((match) =>
                              match.replace(/<\/?li>/g, "")
                            )
                          : [];

                        const classed =
                          index == 1
                            ? styles.second
                            : index == 2
                            ? styles.third
                            : "";
                        return (
                          <div className={styles.testingItem} key={index}>
                            <div className={styles.testItem}>
                              <h4 className={styles.testingObject}>
                                {h4Content}
                              </h4>
                              <ul className={classed}>
                                {liContents.length
                                  ? liContents.map((item, index) => {
                                      return <li key={index}>{item}</li>;
                                    })
                                  : null}
                              </ul>
                            </div>
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
            </div>
          )}

          {project?.acf?.title_sup && (
            <div className={styles.support}>
              <div className="container">
                <h3 className={styles.supportTitle} ref={supTitleRef}>
                  {project.acf?.title_sup}
                </h3>
                <p className={styles.supportDescr} ref={supDescrRef}>
                  {project.acf?.description_sup}
                </p>

                <div className={styles.supportWrap}>
                  <div className={styles.supportTextBlock} ref={supTextRef}>
                    <h4 className={styles.supportBlockTitle}>
                      {project.acf?.subtitle}
                    </h4>
                    <p className={styles.supportBlockDescr}>
                      {project.acf?.text_sup.replace(/<\/?p>/g, "")}
                    </p>
                    <div className={styles.supportBtn}>
                      <span>Connect to Slack</span>
                    </div>
                  </div>
                  <div className={styles.supportImg} ref={supImgRef}>
                    <Image
                      src={project.acf?.image_sup}
                      alt={project.acf?.subtitle}
                      width={261}
                      height={57}
                      layout="responsive"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {project?.acf?.title_mn && (
            <div className={styles.manage}>
              <div className="container">
                <div className={styles.manageTopWrap}>
                  <div className={styles.manageImg} ref={manageRef}>
                    {project.acf?.images_mn.map((item, index) => {
                      return (
                        <Image
                          key={index}
                          src={item?.url}
                          alt={item?.alt}
                          width={420}
                          height={57}
                          layout="responsive"
                          loading="lazy"
                        />
                      );
                    })}
                  </div>
                  <div className={styles.topTextBlock} ref={projBlocksRef}>
                    <div className={styles.topTestWrapLast}>
                      <h4 className={styles.topTitle} ref={manageTitleRef}>
                        {project.acf?.title_mn}
                      </h4>
                      <p className={styles.topDescr} ref={manageDescrRef}>
                        {pContent}
                      </p>
                      <ul className={styles.topList}>
                        {liContents &&
                          liContents.map((item, index) => {
                            return (
                              <li key={index}>
                                {item.replace(/<\/?strong>/g, "")}
                              </li>
                            );
                          })}
                      </ul>
                    </div>
                    <div className={styles.topBtnsWrap}>
                      <Link href={"/contact-us"}>
                        <div className={styles.bottomImgBtn}>
                          <span>
                            {project.acf?.text_button_mn.replace(
                              /<\/?br>/g,
                              ""
                            )}
                          </span>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {nextProj && (
            <div
              className={styles.nextProject}
              style={{
                background: `url(${nextProj.acf?.image_ts}) top center/cover no-repeat`,
              }}
            > 
              <div className={styles.nextWrapper}>
                <Link href={`/projects/${nextProj.slug}`}>
                  <div className={styles.nextBtn}>
                    <span>Next Project</span>
                  </div>
                </Link>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};

export default ProjectS;
