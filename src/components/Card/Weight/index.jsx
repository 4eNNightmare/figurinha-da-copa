import c from "classnames";
import styles from "./styles.module.css";

export default function Weight({ weight }) {
  return (
    <div className={c(styles.container)}>
      <WeightSVG />
      <div className={c(styles.text)}>{weight}</div>
    </div>
  );
}

function WeightSVG() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="32"
      viewBox="0 0 31 32"
      fill="none"
    >
      <path
        d="M8.512 26.154C8.40933 26.154 8.32533 26.14 8.26 26.112C8.204 26.084 8.162 26.042 8.134 25.986C8.11533 25.9207 8.106 25.8367 8.106 25.734V16.788C8.106 16.6853 8.12 16.606 8.148 16.55C8.176 16.4847 8.218 16.4427 8.274 16.424C8.33933 16.396 8.42333 16.382 8.526 16.382C8.62867 16.382 8.708 16.396 8.764 16.424C8.82933 16.452 8.876 16.4987 8.904 16.564C8.932 16.62 8.946 16.6993 8.946 16.802V20.666L13.636 16.508C13.72 16.4333 13.79 16.3867 13.846 16.368C13.9113 16.3493 13.972 16.354 14.028 16.382C14.0933 16.41 14.1587 16.4613 14.224 16.536C14.336 16.6573 14.3873 16.76 14.378 16.844C14.3687 16.928 14.3033 17.0213 14.182 17.124L9.534 21.24L14.252 25.426C14.3733 25.5287 14.4387 25.622 14.448 25.706C14.4573 25.79 14.406 25.8927 14.294 26.014C14.2287 26.0887 14.1633 26.14 14.098 26.168C14.042 26.196 13.9813 26.2007 13.916 26.182C13.86 26.1633 13.79 26.1167 13.706 26.042L8.946 21.828V25.748C8.946 25.8507 8.932 25.9347 8.904 26C8.876 26.056 8.82933 26.0933 8.764 26.112C8.708 26.14 8.624 26.154 8.512 26.154Z"
        fill="white"
      />
      <path
        d="M19.8178 26.14C19.0804 26.14 18.4224 26.028 17.8438 25.804C17.2651 25.5707 16.7751 25.2393 16.3738 24.81C15.9724 24.3713 15.6644 23.844 15.4498 23.228C15.2444 22.6027 15.1418 21.8933 15.1418 21.1C15.1418 20.3627 15.2491 19.7 15.4638 19.112C15.6878 18.524 16.0051 18.0247 16.4158 17.614C16.8358 17.2033 17.3444 16.886 17.9418 16.662C18.5391 16.4287 19.2158 16.3073 19.9718 16.298C20.2611 16.298 20.5504 16.326 20.8398 16.382C21.1291 16.4287 21.4044 16.5033 21.6658 16.606C21.9364 16.6993 22.1791 16.816 22.3938 16.956C22.5431 17.0493 22.6644 17.1427 22.7578 17.236C22.8511 17.32 22.9024 17.3993 22.9118 17.474C22.9304 17.5207 22.9304 17.5767 22.9118 17.642C22.8931 17.7073 22.8651 17.768 22.8278 17.824C22.7904 17.88 22.7438 17.9267 22.6878 17.964C22.6318 17.992 22.5711 18.006 22.5058 18.006C22.4871 18.006 22.4358 17.9827 22.3518 17.936C22.2678 17.8893 22.1604 17.824 22.0298 17.74C21.8431 17.6187 21.6331 17.516 21.3998 17.432C21.1758 17.3387 20.9378 17.2687 20.6858 17.222C20.4338 17.1753 20.1771 17.152 19.9158 17.152C19.1038 17.152 18.4038 17.3107 17.8158 17.628C17.2278 17.9453 16.7751 18.4027 16.4578 19C16.1498 19.5973 15.9911 20.316 15.9818 21.156C15.9911 22.024 16.1498 22.766 16.4578 23.382C16.7751 23.998 17.2231 24.474 17.8018 24.81C18.3804 25.1367 19.0711 25.3 19.8738 25.3C20.1351 25.3 20.4011 25.2767 20.6718 25.23C20.9424 25.1833 21.2084 25.118 21.4698 25.034C21.7311 24.95 21.9784 24.8473 22.2118 24.726V21.52H19.2858C19.1831 21.52 19.0991 21.5107 19.0338 21.492C18.9684 21.464 18.9218 21.422 18.8938 21.366C18.8658 21.3007 18.8518 21.2167 18.8518 21.114C18.8518 21.002 18.8658 20.918 18.8938 20.862C18.9218 20.7967 18.9638 20.75 19.0198 20.722C19.0851 20.694 19.1691 20.68 19.2718 20.68H22.5198C22.6411 20.68 22.7391 20.7033 22.8138 20.75C22.8884 20.7873 22.9444 20.8433 22.9818 20.918C23.0284 20.9927 23.0518 21.0907 23.0518 21.212V24.852C23.0518 24.964 22.9818 25.0807 22.8418 25.202C22.7018 25.3233 22.4964 25.4493 22.2258 25.58C22.0204 25.6827 21.7871 25.776 21.5258 25.86C21.2644 25.944 20.9891 26.0093 20.6998 26.056C20.4104 26.112 20.1164 26.14 19.8178 26.14Z"
        fill="white"
      />
      <path
        d="M1 31.1154L0.508712 31.0225L0.396555 31.6154H1V31.1154ZM30 31.1154V31.6154H30.6035L30.4913 31.0224L30 31.1154ZM4.90319 10.4808V9.98077H4.4889L4.4119 10.3878L4.90319 10.4808ZM26.0955 10.4808L26.5868 10.3878L26.5097 9.98077H26.0955V10.4808ZM11.5173 10.4808V10.9808H12.7076L11.8743 10.1307L11.5173 10.4808ZM19.4827 10.4808L19.1257 10.1307L18.2924 10.9808H19.4827V10.4808ZM8.26 26.112L8.03639 26.5592L8.04954 26.5658L8.06304 26.5716L8.26 26.112ZM8.134 25.986L7.65324 26.1234L7.666 26.168L7.68679 26.2096L8.134 25.986ZM8.148 16.55L8.59521 16.7736L8.60178 16.7605L8.60757 16.747L8.148 16.55ZM8.274 16.424L8.43211 16.8983L8.45184 16.8918L8.47096 16.8836L8.274 16.424ZM8.764 16.424L8.54039 16.8712L8.55354 16.8778L8.56704 16.8836L8.764 16.424ZM8.904 16.564L8.44443 16.761L8.45022 16.7745L8.45679 16.7876L8.904 16.564ZM8.946 20.666H8.446V21.7775L9.2777 21.0401L8.946 20.666ZM13.636 16.508L13.9677 16.8821L13.9682 16.8817L13.636 16.508ZM13.846 16.368L13.7086 15.8872L13.6982 15.8902L13.6879 15.8937L13.846 16.368ZM14.028 16.382L13.8044 16.8292L13.8175 16.8358L13.831 16.8416L14.028 16.382ZM14.224 16.536L13.8476 16.8654L13.8566 16.8751L14.224 16.536ZM14.182 17.124L13.8589 16.7422L13.8505 16.7497L14.182 17.124ZM9.534 21.24L9.20252 20.8657L8.78022 21.2396L9.20216 21.614L9.534 21.24ZM14.252 25.426L13.9201 25.8001L13.929 25.8077L14.252 25.426ZM14.448 25.706L13.9511 25.7612L13.9511 25.7612L14.448 25.706ZM14.294 26.014L13.9265 25.6747L13.9177 25.6847L14.294 26.014ZM14.098 26.168L13.901 25.7084L13.8875 25.7142L13.8744 25.7208L14.098 26.168ZM13.916 26.182L13.7579 26.6563L13.7682 26.6598L13.7786 26.6628L13.916 26.182ZM13.706 26.042L14.0382 25.6683L14.0374 25.6676L13.706 26.042ZM8.946 21.828L9.27743 21.4536L8.446 20.7176V21.828H8.946ZM8.904 26L9.35121 26.2236L9.35778 26.2105L9.36357 26.197L8.904 26ZM8.764 26.112L8.62664 25.6312L8.58196 25.644L8.54039 25.6648L8.764 26.112ZM17.8438 25.804L17.6568 26.2678L17.6633 26.2703L17.8438 25.804ZM16.3738 24.81L16.0048 25.1475L16.0085 25.1514L16.3738 24.81ZM15.4498 23.228L14.9746 23.384L14.9776 23.3925L15.4498 23.228ZM15.4638 19.112L14.9965 18.934L14.9941 18.9405L15.4638 19.112ZM16.4158 17.614L16.0662 17.2565L16.0622 17.2604L16.4158 17.614ZM17.9418 16.662L18.1173 17.1302L18.1237 17.1277L17.9418 16.662ZM19.9718 16.298V15.798L19.9656 15.798L19.9718 16.298ZM20.8398 16.382L20.7448 16.8729L20.7524 16.8744L20.7601 16.8756L20.8398 16.382ZM21.6658 16.606L21.4829 17.0714L21.4928 17.0752L21.5028 17.0787L21.6658 16.606ZM22.3938 16.956L22.1206 17.3749L22.1288 17.38L22.3938 16.956ZM22.7578 17.236L22.4042 17.5896L22.4135 17.5989L22.4233 17.6076L22.7578 17.236ZM22.9118 17.474L22.4156 17.536L22.4236 17.5999L22.4475 17.6597L22.9118 17.474ZM22.9118 17.642L23.3925 17.7794L23.3925 17.7794L22.9118 17.642ZM22.8278 17.824L22.4117 17.5466L22.4117 17.5467L22.8278 17.824ZM22.6878 17.964L22.9114 18.4112L22.9392 18.3973L22.9651 18.38L22.6878 17.964ZM22.0298 17.74L21.7573 18.1592L21.7594 18.1606L22.0298 17.74ZM21.3998 17.432L21.2075 17.8935L21.2188 17.8983L21.2304 17.9024L21.3998 17.432ZM17.8158 17.628L17.5783 17.188L17.5783 17.188L17.8158 17.628ZM16.4578 19L16.0162 18.7654L16.0134 18.7709L16.4578 19ZM15.9818 21.156L15.4817 21.1504L15.4818 21.1614L15.9818 21.156ZM16.4578 23.382L16.0105 23.6056L16.0133 23.611L16.4578 23.382ZM17.8018 24.81L17.5507 25.2424L17.556 25.2454L17.8018 24.81ZM20.6718 25.23L20.7567 25.7227L20.7567 25.7227L20.6718 25.23ZM21.4698 25.034L21.6228 25.51L21.6228 25.51L21.4698 25.034ZM22.2118 24.726L22.4424 25.1696L22.7118 25.0296V24.726H22.2118ZM22.2118 21.52H22.7118V21.02H22.2118V21.52ZM19.0338 21.492L18.8368 21.9516L18.8659 21.9641L18.8964 21.9728L19.0338 21.492ZM18.8938 21.366L18.4342 21.563L18.44 21.5765L18.4466 21.5896L18.8938 21.366ZM18.8938 20.862L19.341 21.0856L19.3476 21.0725L19.3533 21.059L18.8938 20.862ZM19.0198 20.722L18.8228 20.2624L18.8093 20.2682L18.7962 20.2748L19.0198 20.722ZM22.8138 20.75L22.5488 21.174L22.5689 21.1866L22.5902 21.1972L22.8138 20.75ZM22.9818 20.918L22.5346 21.1416L22.5452 21.1629L22.5578 21.183L22.9818 20.918ZM22.8418 25.202L22.5143 24.8242L22.5143 24.8242L22.8418 25.202ZM22.2258 25.58L22.0084 25.1297L22.0022 25.1328L22.2258 25.58ZM21.5258 25.86L21.6788 26.336L21.6788 26.336L21.5258 25.86ZM20.6998 26.056L20.6201 25.5624L20.6124 25.5636L20.6048 25.5651L20.6998 26.056ZM18.3462 6.57692C18.3462 8.14881 17.0719 9.42308 15.5 9.42308V10.4231C17.6242 10.4231 19.3462 8.70109 19.3462 6.57692H18.3462ZM15.5 9.42308C13.9281 9.42308 12.6538 8.14881 12.6538 6.57692H11.6538C11.6538 8.7011 13.3758 10.4231 15.5 10.4231V9.42308ZM12.6538 6.57692C12.6538 5.00504 13.9281 3.73077 15.5 3.73077V2.73077C13.3758 2.73077 11.6538 4.45275 11.6538 6.57692H12.6538ZM15.5 3.73077C17.0719 3.73077 18.3462 5.00504 18.3462 6.57692H19.3462C19.3462 4.45275 17.6242 2.73077 15.5 2.73077V3.73077ZM10.4231 6.57692C10.4231 3.77302 12.6961 1.5 15.5 1.5V0.5C12.1438 0.5 9.42308 3.22073 9.42308 6.57692H10.4231ZM15.5 1.5C18.3039 1.5 20.5769 3.77302 20.5769 6.57692H21.5769C21.5769 3.22073 18.8562 0.5 15.5 0.5V1.5ZM1 31.6154H30V30.6154H1V31.6154ZM1.49129 31.2083L5.39448 10.5737L4.4119 10.3878L0.508712 31.0225L1.49129 31.2083ZM25.6042 10.5737L29.5087 31.2083L30.4913 31.0224L26.5868 10.3878L25.6042 10.5737ZM4.90319 10.9808H11.5173V9.98077H4.90319V10.9808ZM11.8743 10.1307C10.9761 9.21449 10.4231 7.96079 10.4231 6.57692H9.42308C9.42308 8.23299 10.0862 9.73518 11.1602 10.8308L11.8743 10.1307ZM19.4827 10.9808H26.0955V9.98077H19.4827V10.9808ZM20.5769 6.57692C20.5769 7.96079 20.0239 9.21448 19.1257 10.1307L19.8398 10.8308C20.9138 9.73518 21.5769 8.23299 21.5769 6.57692H20.5769ZM8.512 25.654C8.48281 25.654 8.46418 25.652 8.4542 25.6503C8.44415 25.6486 8.44646 25.6479 8.45696 25.6524L8.06304 26.5716C8.21182 26.6353 8.3693 26.654 8.512 26.654V25.654ZM8.48361 25.6648C8.50106 25.6735 8.52104 25.6869 8.54005 25.7059C8.55907 25.725 8.57249 25.7449 8.58121 25.7624L7.68679 26.2096C7.76317 26.3624 7.88363 26.4828 8.03639 26.5592L8.48361 25.6648ZM8.61476 25.8486C8.61481 25.8488 8.61416 25.8465 8.61319 25.8414C8.61222 25.8362 8.61105 25.8288 8.60994 25.8188C8.60769 25.7985 8.606 25.7706 8.606 25.734H7.606C7.606 25.862 7.61708 25.9968 7.65324 26.1234L8.61476 25.8486ZM8.606 25.734V16.788H7.606V25.734H8.606ZM8.606 16.788C8.606 16.7736 8.6065 16.7623 8.60715 16.7537C8.60781 16.7452 8.60857 16.7402 8.60889 16.7384C8.60922 16.7365 8.60892 16.7389 8.60716 16.7446C8.60539 16.7503 8.60181 16.7604 8.59521 16.7736L7.70079 16.3264C7.62269 16.4826 7.606 16.6516 7.606 16.788H8.606ZM8.60757 16.747C8.60133 16.7615 8.58594 16.7912 8.55405 16.8231C8.52052 16.8566 8.47823 16.883 8.43211 16.8983L8.11589 15.9497C7.89692 16.0226 7.76017 16.1856 7.68843 16.353L8.60757 16.747ZM8.47096 16.8836C8.46046 16.8881 8.45815 16.8874 8.4682 16.8857C8.47818 16.884 8.49681 16.882 8.526 16.882V15.882C8.3833 15.882 8.22582 15.9007 8.07704 15.9644L8.47096 16.8836ZM8.526 16.882C8.54042 16.882 8.55174 16.8825 8.56028 16.8832C8.56885 16.8838 8.57379 16.8846 8.57561 16.8849C8.57747 16.8852 8.57511 16.8849 8.56943 16.8832C8.56374 16.8814 8.55358 16.8778 8.54039 16.8712L8.98761 15.9768C8.83142 15.8987 8.66242 15.882 8.526 15.882V16.882ZM8.56704 16.8836C8.54578 16.8745 8.51946 16.8586 8.49445 16.8336C8.46944 16.8085 8.45354 16.7822 8.44443 16.761L9.36357 16.367C9.285 16.1837 9.1443 16.043 8.96096 15.9644L8.56704 16.8836ZM8.45679 16.7876C8.45019 16.7744 8.44661 16.7643 8.44484 16.7586C8.44308 16.7529 8.44278 16.7505 8.44311 16.7524C8.44343 16.7542 8.44419 16.7591 8.44485 16.7677C8.4455 16.7763 8.446 16.7876 8.446 16.802H9.446C9.446 16.6656 9.42931 16.4966 9.35121 16.3404L8.45679 16.7876ZM8.446 16.802V20.666H9.446V16.802H8.446ZM9.2777 21.0401L13.9677 16.8821L13.3043 16.1339L8.6143 20.2919L9.2777 21.0401ZM13.9682 16.8817C13.9983 16.855 14.0182 16.8401 14.0288 16.833C14.0338 16.8297 14.0347 16.8295 14.0315 16.8311C14.0286 16.8327 14.0192 16.8373 14.0041 16.8423L13.6879 15.8937C13.5329 15.9453 13.401 16.048 13.3038 16.1343L13.9682 16.8817ZM13.9834 16.8488C13.9656 16.8538 13.9375 16.8587 13.9022 16.856C13.8661 16.8533 13.8325 16.8433 13.8044 16.8292L14.2516 15.9348C14.0738 15.8459 13.8831 15.8374 13.7086 15.8872L13.9834 16.8488ZM13.831 16.8416C13.8176 16.8358 13.8131 16.8315 13.8171 16.8347C13.8212 16.8379 13.8317 16.8469 13.8477 16.8653L14.6003 16.2067C14.504 16.0967 14.3807 15.9892 14.225 15.9224L13.831 16.8416ZM13.8566 16.8751C13.8739 16.8939 13.8854 16.9082 13.8926 16.9181C13.8999 16.9281 13.9011 16.9312 13.8993 16.9276C13.8968 16.9227 13.8719 16.8712 13.8811 16.7888L14.8749 16.8992C14.9102 16.5821 14.7176 16.3336 14.5914 16.1969L13.8566 16.8751ZM13.8811 16.7888C13.8847 16.7559 13.8929 16.7308 13.8997 16.7147C13.9063 16.6989 13.912 16.6908 13.9124 16.6903C13.9128 16.6897 13.9096 16.6943 13.9004 16.7039C13.8914 16.7134 13.878 16.7263 13.859 16.7423L14.505 17.5057C14.6476 17.385 14.8434 17.1833 14.8749 16.8992L13.8811 16.7888ZM13.8505 16.7497L9.20252 20.8657L9.86548 21.6143L14.5135 17.4983L13.8505 16.7497ZM9.20216 21.614L13.9202 25.8L14.5838 25.052L9.86584 20.866L9.20216 21.614ZM13.929 25.8077C13.948 25.8237 13.9614 25.8366 13.9704 25.8461C13.9796 25.8557 13.9828 25.8603 13.9824 25.8597C13.982 25.8592 13.9763 25.8511 13.9697 25.8353C13.9629 25.8192 13.9547 25.7941 13.9511 25.7612L14.9449 25.6508C14.9134 25.3667 14.7176 25.165 14.575 25.0443L13.929 25.8077ZM13.9511 25.7612C13.9419 25.6788 13.9668 25.6273 13.9693 25.6224C13.9711 25.6188 13.9699 25.6219 13.9626 25.6319C13.9554 25.6418 13.9439 25.6561 13.9266 25.6749L14.6614 26.3531C14.7876 26.2164 14.9802 25.9679 14.9449 25.6508L13.9511 25.7612ZM13.9177 25.6847C13.9017 25.7031 13.8912 25.7121 13.8871 25.7153C13.8831 25.7185 13.8876 25.7142 13.901 25.7084L14.295 26.6276C14.4507 26.5608 14.574 26.4533 14.6703 26.3433L13.9177 25.6847ZM13.8744 25.7208C13.9025 25.7067 13.9361 25.6967 13.9722 25.694C14.0075 25.6913 14.0356 25.6962 14.0534 25.7012L13.7786 26.6628C13.9531 26.7126 14.1438 26.7041 14.3216 26.6152L13.8744 25.7208ZM14.0741 25.7077C14.0892 25.7127 14.0986 25.7173 14.1015 25.7189C14.1047 25.7205 14.1038 25.7203 14.0988 25.717C14.0882 25.7099 14.0682 25.695 14.0382 25.6683L13.3738 26.4157C13.471 26.502 13.6029 26.6047 13.7579 26.6563L14.0741 25.7077ZM14.0374 25.6676L9.27743 21.4536L8.61457 22.2024L13.3746 26.4164L14.0374 25.6676ZM8.446 21.828V25.748H9.446V21.828H8.446ZM8.446 25.748C8.446 25.7772 8.44397 25.7958 8.4423 25.8058C8.44063 25.8159 8.43993 25.8135 8.44443 25.803L9.36357 26.197C9.42734 26.0482 9.446 25.8907 9.446 25.748H8.446ZM8.45679 25.7764C8.47357 25.7428 8.4998 25.7082 8.53565 25.6796C8.5707 25.6515 8.60425 25.6376 8.62664 25.6312L8.90136 26.5928C9.0886 26.5393 9.2548 26.4164 9.35121 26.2236L8.45679 25.7764ZM8.54039 25.6648C8.55591 25.657 8.5675 25.6531 8.57308 25.6515C8.57872 25.6498 8.58033 25.6497 8.5768 25.6503C8.57336 25.6509 8.56633 25.6518 8.55513 25.6526C8.54398 25.6534 8.52972 25.654 8.512 25.654V26.654C8.64954 26.654 8.82713 26.6395 8.98761 26.5592L8.54039 25.6648ZM19.8178 25.64C19.1308 25.64 18.5356 25.5357 18.0243 25.3377L17.6633 26.2703C18.3092 26.5203 19.0301 26.64 19.8178 26.64V25.64ZM18.0307 25.3403C17.5155 25.1325 17.0875 24.8414 16.739 24.4686L16.0085 25.1514C16.4627 25.6373 17.0147 26.0088 17.6568 26.2677L18.0307 25.3403ZM16.7427 24.4725C16.3914 24.0886 16.1164 23.6217 15.9219 23.0635L14.9776 23.3925C15.2124 24.0663 15.5535 24.6541 16.0049 25.1475L16.7427 24.4725ZM15.9248 23.072C15.739 22.5061 15.6418 21.8509 15.6418 21.1H14.6418C14.6418 21.9358 14.7499 22.6992 14.9747 23.384L15.9248 23.072ZM15.6418 21.1C15.6418 20.411 15.7421 19.8077 15.9334 19.2835L14.9941 18.9405C14.7561 19.5923 14.6418 20.3144 14.6418 21.1H15.6418ZM15.931 19.29C16.132 18.7623 16.4125 18.3243 16.7693 17.9676L16.0622 17.2604C15.5977 17.725 15.2435 18.2857 14.9965 18.934L15.931 19.29ZM16.7653 17.9715C17.1315 17.6135 17.5794 17.3319 18.1173 17.1302L17.7662 16.1938C17.1095 16.4401 16.54 16.7932 16.0662 17.2565L16.7653 17.9715ZM18.1237 17.1277C18.6559 16.9198 19.2716 16.8067 19.9779 16.798L19.9656 15.798C19.16 15.808 18.4223 15.9375 17.7598 16.1963L18.1237 17.1277ZM19.9718 16.798C20.2286 16.798 20.4861 16.8228 20.7448 16.8729L20.9348 15.8911C20.6147 15.8292 20.2936 15.798 19.9718 15.798V16.798ZM20.7601 16.8756C21.0157 16.9168 21.2563 16.9823 21.4829 17.0714L21.8486 16.1406C21.5525 16.0243 21.2425 15.9405 20.9194 15.8884L20.7601 16.8756ZM21.5028 17.0787C21.7391 17.1602 21.9441 17.2597 22.1206 17.3748L22.6669 16.5372C22.4141 16.3723 22.1338 16.2385 21.8288 16.1333L21.5028 17.0787ZM22.1288 17.38C22.2559 17.4595 22.3448 17.5302 22.4042 17.5896L23.1113 16.8824C22.984 16.7552 22.8302 16.6392 22.6588 16.532L22.1288 17.38ZM22.4233 17.6076C22.4473 17.6292 22.4511 17.6372 22.4465 17.6301C22.4414 17.6223 22.4224 17.59 22.4156 17.536L23.4079 17.412C23.3765 17.1606 23.2196 16.979 23.0922 16.8644L22.4233 17.6076ZM22.4475 17.6597C22.4127 17.5726 22.4299 17.5087 22.431 17.5046L23.3925 17.7794C23.431 17.6447 23.4482 17.4688 23.376 17.2883L22.4475 17.6597ZM22.431 17.5046C22.4264 17.5207 22.4201 17.5341 22.4117 17.5466L23.2438 18.1014C23.3101 18.0019 23.3598 17.8939 23.3925 17.7794L22.431 17.5046ZM22.4117 17.5467C22.411 17.5478 22.4108 17.5479 22.4112 17.5474C22.4116 17.547 22.4116 17.5472 22.4104 17.548L22.9651 18.38C23.076 18.3061 23.1698 18.2123 23.2438 18.1013L22.4117 17.5467ZM22.4642 17.5168C22.4713 17.5132 22.4795 17.5102 22.4878 17.5083C22.4962 17.5064 22.5025 17.506 22.5058 17.506V18.506C22.6452 18.506 22.7829 18.4755 22.9114 18.4112L22.4642 17.5168ZM22.5058 17.506C22.53 17.506 22.5504 17.5078 22.5655 17.5098C22.5808 17.5118 22.5937 17.5142 22.6034 17.5163C22.6224 17.5204 22.6365 17.5249 22.6438 17.5273C22.6578 17.532 22.6644 17.5353 22.6602 17.5333C22.6523 17.5297 22.6318 17.5196 22.5946 17.4989L22.1089 18.3731C22.1558 18.3991 22.2029 18.4239 22.2464 18.4437C22.2678 18.4534 22.296 18.4654 22.3275 18.476C22.3476 18.4827 22.4173 18.506 22.5058 18.506V17.506ZM22.5946 17.4989C22.5238 17.4596 22.4266 17.4007 22.3001 17.3194L21.7594 18.1606C21.8943 18.2473 22.0117 18.319 22.1089 18.3731L22.5946 17.4989ZM22.3023 17.3208C22.0799 17.1762 21.8346 17.0571 21.5691 16.9616L21.2304 17.9024C21.4316 17.9749 21.6063 18.0611 21.7573 18.1592L22.3023 17.3208ZM21.5921 16.9705C21.3337 16.8628 21.0616 16.7831 20.7768 16.7304L20.5947 17.7136C20.8139 17.7542 21.0178 17.8145 21.2075 17.8935L21.5921 16.9705ZM20.7768 16.7304C20.4942 16.678 20.207 16.652 19.9158 16.652V17.652C20.1472 17.652 20.3733 17.6726 20.5947 17.7136L20.7768 16.7304ZM19.9158 16.652C19.0386 16.652 18.2534 16.8237 17.5783 17.188L18.0532 18.068C18.5541 17.7977 19.169 17.652 19.9158 17.652V16.652ZM17.5783 17.188C16.9024 17.5528 16.3792 18.0821 16.0162 18.7654L16.8993 19.2346C17.171 18.7232 17.5532 18.3379 18.0532 18.068L17.5783 17.188ZM16.0134 18.7709C15.6619 19.4525 15.4918 20.2516 15.4818 21.1504L16.4817 21.1616C16.4904 20.3804 16.6376 19.7422 16.9022 19.2291L16.0134 18.7709ZM15.4818 21.1614C15.4917 22.086 15.661 22.9065 16.0106 23.6056L16.905 23.1584C16.6385 22.6255 16.4905 21.962 16.4817 21.1506L15.4818 21.1614ZM16.0133 23.611C16.3727 24.3087 16.8864 24.8567 17.5507 25.2424L18.0528 24.3776C17.5598 24.0913 17.1775 23.6873 16.9023 23.153L16.0133 23.611ZM17.556 25.2454C18.2238 25.6224 19.0028 25.8 19.8738 25.8V24.8C19.1394 24.8 18.5371 24.6509 18.0476 24.3746L17.556 25.2454ZM19.8738 25.8C20.165 25.8 20.4594 25.774 20.7567 25.7227L20.5868 24.7373C20.3428 24.7793 20.1052 24.8 19.8738 24.8V25.8ZM20.7567 25.7227C21.0504 25.6721 21.3392 25.6012 21.6228 25.51L21.3168 24.558C21.0777 24.6348 20.8344 24.6946 20.5868 24.7373L20.7567 25.7227ZM21.6228 25.51C21.9097 25.4178 22.1831 25.3045 22.4424 25.1696L21.9811 24.2824C21.7738 24.3902 21.5525 24.4822 21.3168 24.558L21.6228 25.51ZM22.7118 24.726V21.52H21.7118V24.726H22.7118ZM22.2118 21.02H19.2858V22.02H22.2118V21.02ZM19.2858 21.02C19.2491 21.02 19.2213 21.0183 19.201 21.0161C19.191 21.0149 19.1836 21.0138 19.1784 21.0128C19.1732 21.0118 19.1709 21.0112 19.1711 21.0112L18.8964 21.9728C19.023 22.0089 19.1578 22.02 19.2858 22.02V21.02ZM19.2307 21.0324C19.2418 21.0372 19.2619 21.0477 19.2843 21.0679C19.3073 21.0886 19.3269 21.1143 19.341 21.1424L18.4466 21.5896C18.5346 21.7656 18.6784 21.8837 18.8368 21.9516L19.2307 21.0324ZM19.3533 21.169C19.3578 21.1795 19.3571 21.1819 19.3555 21.1718C19.3538 21.1618 19.3518 21.1432 19.3518 21.114H18.3518C18.3518 21.2567 18.3704 21.4142 18.4342 21.563L19.3533 21.169ZM19.3518 21.114C19.3518 21.0963 19.3523 21.082 19.3531 21.0709C19.3539 21.0597 19.3549 21.0526 19.3555 21.0492C19.3561 21.0457 19.356 21.0473 19.3543 21.0529C19.3526 21.0585 19.3487 21.0701 19.341 21.0856L18.4466 20.6384C18.3663 20.7989 18.3518 20.9765 18.3518 21.114H19.3518ZM19.3533 21.059C19.3486 21.0701 19.338 21.0901 19.3179 21.1125C19.2972 21.1355 19.2715 21.1552 19.2434 21.1692L18.7962 20.2748C18.6201 20.3628 18.5021 20.5066 18.4342 20.665L19.3533 21.059ZM19.2167 21.1816C19.2062 21.1861 19.2039 21.1854 19.214 21.1837C19.2239 21.182 19.2426 21.18 19.2718 21.18V20.18C19.1291 20.18 18.9716 20.1987 18.8228 20.2624L19.2167 21.1816ZM19.2718 21.18H22.5198V20.18H19.2718V21.18ZM22.5198 21.18C22.5491 21.18 22.5642 21.1829 22.5685 21.1839C22.5722 21.1848 22.5635 21.1832 22.5488 21.174L23.0788 20.326C22.9 20.2143 22.7007 20.18 22.5198 20.18V21.18ZM22.5902 21.1972C22.582 21.1932 22.5702 21.1856 22.5582 21.1736C22.5462 21.1615 22.5386 21.1497 22.5346 21.1416L23.429 20.6944C23.3433 20.523 23.2088 20.3885 23.0374 20.3028L22.5902 21.1972ZM22.5578 21.183C22.5485 21.1682 22.547 21.1596 22.5479 21.1633C22.5489 21.1676 22.5518 21.1827 22.5518 21.212H23.5518C23.5518 21.0311 23.5175 20.8318 23.4058 20.653L22.5578 21.183ZM22.5518 21.212V24.852H23.5518V21.212H22.5518ZM22.5518 24.852C22.5518 24.8272 22.5558 24.8062 22.5605 24.7905C22.5652 24.7754 22.5699 24.7672 22.5705 24.7663C22.571 24.7654 22.5681 24.7705 22.5587 24.7811C22.5494 24.7916 22.5352 24.8061 22.5143 24.8242L23.1692 25.5798C23.3493 25.4238 23.5518 25.1809 23.5518 24.852H22.5518ZM22.5143 24.8242C22.4218 24.9044 22.2607 25.0079 22.0084 25.1297L22.4431 26.0303C22.7322 25.8907 22.9818 25.7423 23.1692 25.5798L22.5143 24.8242ZM22.0022 25.1328C21.8235 25.2221 21.6144 25.3063 21.3728 25.384L21.6788 26.336C21.9598 26.2457 22.2174 26.1432 22.4494 26.0272L22.0022 25.1328ZM21.3728 25.384C21.137 25.4598 20.8863 25.5195 20.6201 25.5624L20.7794 26.5496C21.0919 26.4992 21.3919 26.4282 21.6788 26.336L21.3728 25.384ZM20.6048 25.5651C20.3471 25.615 20.085 25.64 19.8178 25.64V26.64C20.1479 26.64 20.4737 26.609 20.7948 26.5469L20.6048 25.5651Z"
        fill="white"
      />
    </svg>
  );
}