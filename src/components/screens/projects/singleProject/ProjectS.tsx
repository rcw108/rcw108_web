import { ProjectData } from "@/interfaces/project.interface";
import { FC, PropsWithChildren } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./singleProject.module.scss";

interface IProj {
  project: ProjectData;
  nextProj: ProjectData;
}

const ProjectS: FC<PropsWithChildren<IProj>> = ({ project, nextProj }) => {
  const h4ContentRegex = /<h4>(.*?)<\/h4>/;
  const match = project.acf.description_dv.match(h4ContentRegex);

  const h4Content = match ? match[1] : "";
  const remainingContent = project.acf.description_dv.replace(
    h4ContentRegex,
    ""
  );

  const pContentRegex = /<p>(.*?)<\/p>/;
  const pMatch = project.acf?.text_mn.match(pContentRegex);

  const pContent = pMatch ? pMatch[1] : "";

  const remainingPContent = project.acf?.text_mn.replace(pContentRegex, "");

  const liContentRegex = /<li>(.*?)<\/li>/gs;
  const LiMatches = remainingPContent.match(liContentRegex);

  const liContents = LiMatches
    ? LiMatches.map((match) => match.replace(/<\/?li>/g, ""))
    : [];

  return (
    <section className={styles.single}>
      <div className={styles.headSection}>
        <div className="container">
          <div className={styles.title}>{project.title.rendered}</div>
          <div className={styles.topImgOwn}>
            <Image
              src={project.acf.logo_company}
              alt={project.title.rendered}
              width={261}
              height={57}
            />
          </div>
          <div className={styles.hourWrap}>
            {project.acf.informations
              ? project.acf.informations.map((item, index) => {
                  return (
                    <div key={index} className={styles.hourBlock}>
                      <h3 className={styles.hourTitle}>
                        {`${item.number}`} <span>{item.subnumber}</span>
                      </h3>
                      <p className={styles.hourDescr}>{item.text}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <div className={styles.mainTask}>
        <div className="container">
          <h3 className={styles.taskTitle}>{project.acf.title_tas}</h3>
          <p className={styles.taskDescr}>{project.acf.description_tas}</p>
          <div className={styles.view}>
            <div className={styles.viewBox}>
              <Image
                src={project.acf.image_ts}
                alt={project.acf.title_tas}
                width={261}
                height={57}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.dev}>
        <div className="container">
          <h3 className={styles.devTitle}>{project.acf.title_dv}</h3>
          <div className={styles.devWrap}>
            <div className={styles.devImg}>
              <Image
                src={project.acf.image_dv}
                alt={project.acf.title_dv}
                width={300}
                height={200}
                layout="responsive"
              />
            </div>
            <div className={styles.devDescr}>
              <h4 className={styles.devDescrTitle}>{h4Content}</h4>
              {remainingContent.replace(/<\/?p>/g, "").replace(/&nbsp;/g, "").replace(/<\/?li>/g, "").replace(/<\/?ul>/g, "").replace(/<\/?b>/g, "")}
            </div>
          </div>
        </div>
      </div>

      {project.acf.title_res !== "" ? (
        <div className={styles.resp}>
          <div className="container">
            <h3 className={styles.respTitle}>{project.acf?.title_res}</h3>
            <p className={styles.respDescr}>{project.acf?.description_res}</p>
            <div className={styles.respWrap}>
              {project.acf.images_res
                ? project.acf.images_res.map((item, index) => {
                    return (
                      <div className={styles.resImg} key={index}>
                        <Image
                          src={item.url}
                          alt={item.alt}
                          width={300}
                          height={250}
                        />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      ) : null}

      {project.acf.title_ts !== "" ? (
        <div className={styles.testing}>
          <div className="container">
            <h3 className={styles.testingTitle}>{project.acf?.title_ts}</h3>
            <p className={styles.testingDescr}>{project.acf?.description_ts}</p>
            <div className={styles.testingWrap}>
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
                      ? matches.map((match) => match.replace(/<\/?li>/g, ""))
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
                          <h4 className={styles.testingObject}>{h4Content}</h4>
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
      ) : null}

      {project.acf.title_sup ? (
        <div className={styles.support}>
          <div className="container">
            <h3 className={styles.supportTitle}>{project.acf?.title_sup}</h3>
            <p className={styles.supportDescr}>
              {project.acf?.description_sup}
            </p>

            <div className={styles.supportWrap}>
              <div className={styles.supportTextBlock}>
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
              <div className={styles.supportImg}>
                <Image
                  src={project.acf?.image_sup}
                  alt={project.acf?.subtitle}
                  width={261}
                  height={57}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {project.acf.title_mn ? (
        <div className={styles.manage}>
          <div className="container">
            <div className={styles.manageTopWrap}>
              <div className={styles.manageImg}>
                {project.acf?.images_mn.map((item, index) => {
                  return (
                    <Image
                      key={index}
                      src={item?.url}
                      alt={item?.alt}
                      width={420}
                      height={57}
                      layout="responsive"
                    />
                  );
                })}
              </div>
              <div className={styles.topTextBlock}>
                <div className={styles.topTestWrapLast}>
                  <h4 className={styles.topTitle}>{project.acf?.title_mn}</h4>
                  <p className={styles.topDescr}>{pContent}</p>
                  <ul className={styles.topList}>
                    {liContents.length
                      ? liContents.map((item, index) => {
                          return (
                            <li key={index}>
                              {item.replace(/<\/?strong>/g, "")}
                            </li>
                          );
                        })
                      : null}
                  </ul>
                </div>
                <div className={styles.topBtnsWrap}>
                  <div className={styles.bottomImgBtn}>
                    <span>
                      {project.acf?.text_button_mn.replace(/<\/?br>/g, "")}
                    </span>
                    <svg
                      version="1.1"
                      className={styles.circleSvg1}
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      x="0px"
                      y="0px"
                      viewBox="0 0 149.955 149.955"
                      xmlSpace="preserve"
                    >
                      <path
                        d="M149.945,98.318l-0.906-93.803c-0.022-2.072-1.7-3.75-3.772-3.765L51.634,0l-0.06,7.603l84.735,0.679
        L0.011,144.579l5.376,5.376L141.525,13.817l0.816,84.575L149.945,98.318z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <div
        className={styles.nextProject}
        style={{
          background: `url(${nextProj.acf?.image_ts}) top center/cover no-repeat`,
        }}
      >
        <div className={styles.nextWrapper}>
          <Link href={`/projects/${nextProj.id}`}><div className={styles.nextBtn}>
            <span>Next Project</span>
            <svg
              version="1.1"
              className="circle-svg1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 149.955 149.955"
              xmlSpace="preserve"
            >
              <path d="M149.945,98.318l-0.906-93.803c-0.022-2.072-1.7-3.75-3.772-3.765L51.634,0l-0.06,7.603l84.735,0.679 L0.011,144.579l5.376,5.376L141.525,13.817l0.816,84.575L149.945,98.318z"></path>
            </svg>
          </div></Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectS;
