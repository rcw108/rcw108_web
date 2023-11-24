import { FC, PropsWithChildren } from "react";
import Link from "next/link";

interface IErrorPage {
  title_ch: string;
  text_button: string;
  subtitle: string;
  link_button: string;
}

import styles from "./errorPage.module.scss";

const ErrorPage: FC<PropsWithChildren<IErrorPage>> = ({
  title_ch,
  text_button,
  subtitle,
  link_button,
}) => {
  return (
    <div className={styles.errors}>
      <div className="container">
        <div className={styles.wrapper}>
          {title_ch && <h1 className={styles.title}>{title_ch}</h1>}
          <p className={styles.subTitle}>{subtitle.replace(/<br\s*\/?>/g, "")}</p>
          <h2 className={styles.error}>404</h2>
        </div>
        <Link href="/">
          <div className={styles.btn}>
            <div className={styles.svg}>
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ transform: "rotate(180deg)" }}
              >
                <rect width="20" height="16.5182" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_1005_83"
                      transform="scale(0.00404858 0.00490196)"
                    />
                  </pattern>
                  <image
                    id="image0_1005_83"
                    width="247"
                    height="204"
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPcAAADMCAMAAACY78UPAAAAbFBMVEUAAAD////Y2NihoaHl5eXBwcH19fXIyMjs7Ozv7+/R0dGrq6ve3t62trbV1dV+fn4XFxezs7NwcHDh4eGmpqb5+fmPj48SEhK9vb3Nzc1cXFycnJxjY2NQUFCCgoItLS0rKys5OTlUVFRKSkplH9NgAAACnUlEQVR4nO3dbVPaQBiF4Q3RigliVRRLqG/8//9YoaNFyCY77ew+5Tz3/d3xXBONoLCG8J+06uZNM+9urXeUbVF9trDeUq71fbWfl2v+UB3k45IfsavqwnpTgX4es13Az/rc+vDbXrY+fB5xq8Nj7Ko6t56Ws3XcLQ2/HnArwwfdwvBhty78adgtC38eccvCvzmF34y5ReHLUbcovPUKnwIHDhy4YpfAgQMHrhhw4MDdwx+tN2YJOHDgwK03Zgk48KOurDdmCThw4MCtN2YJOHDg2vDRV8AAFws4cODArTdmCThw4MCtN2YJeLwb641ZAu4MvgQOHDhw65E5Aj5Qaz0yR9+BAwcO3HpkjoAD9wK/Bw4cOHDF/uWuvlov6hOtSzgUpB++uUj4yBPvGP4aPe1PqkN47GxHuVqf7K/wF+sxJduDJ7wAVKjW4Vf5rtbl5a4+Ttt+tZ5Rvh285xRu+bbwznqERe/wH9YbTKrj51FLNwm19QSLZj6/v9/Z4c16RPlmux/g1iuK95vt7gt99vEA3XpI2T7Zg0fty/WHnXI0s0z7bEfwr+wQVtaDynTIdnJX72FvH8DU3eRka/6afdolPKtUZE98shOeS8OWCTZs2LCFgg1bnp3wXAS2TAnsO+uNGYINGzZsoWDHOrPemCHYsGHDFgo2bNiwhUr4+zZsmWDDhg1bKKfshHfjw5YJNmzYsIWCDRs2bKES2FPrjRmCDRs2bKFgw4YNWyin7HPYsGHD1unaJzuMn1UvyR4/x1SSHaY+2Uuf7NG7mih7zK3KHnHLsofduuxBtzB76H6uzA5h5pMdPeDw0npY7pyyw5NPdu/zbw/sntccK75tva+D/x52Zb2nWJu7vYu9sl5Tsk3dbH/x0rSbMp/vF0GXRc+hSYZHAAAAAElFTkSuQmCC"
                  />
                </defs>
              </svg>
            </div>
            <span>{text_button}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
