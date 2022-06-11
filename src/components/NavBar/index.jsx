/* eslint-disable jsx-a11y/anchor-is-valid */
import { Container, Grid, Grid1, Grid2, Hamburger, Logo } from "./styles";
import logoImg from "../../assets/LogoTopo.png";
import { ButtomWhatsApp } from "../buttons/style";
import imgWhatsApp from "../../assets/whatsapp.svg";

export function NavBar({ setMenuIsVisible }) {
  return (
    <Container>
      <Grid>
        <Hamburger>
          <svg
            onClick={() => setMenuIsVisible(true)}
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16H27"
              stroke="#8D3286"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 8H27"
              stroke="#8D3286"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 24H27"
              stroke="#8D3286"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Hamburger>
        <Logo>

        <img src={logoImg} alt="Logo" />
        </Logo>

        <Grid1>
          <section>
            <nav>
              <ul>
                <li>
                  <a href="home">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28.3126 13.7L17.6987 4.61249C17.503 4.44384 17.2474 4.35031 16.9822 4.35031C16.717 4.35031 16.4614 4.44384 16.2658 4.61249L5.6519 13.7C5.54509 13.795 5.45955 13.9092 5.40031 14.0359C5.34107 14.1626 5.30932 14.2991 5.30695 14.4375V26C5.30695 26.2652 5.41877 26.5196 5.61782 26.7071C5.81687 26.8946 6.08684 27 6.36833 27H27.5961C27.8776 27 28.1476 26.8946 28.3466 26.7071C28.5457 26.5196 28.6575 26.2652 28.6575 26V14.4375C28.6551 14.2991 28.6234 14.1626 28.5641 14.0359C28.5049 13.9092 28.4194 13.795 28.3126 13.7V13.7Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <p>HOME</p>
                  </a>
                </li>
                <li>
                  <a href="sobre">
                    <svg width="35" height="32" viewBox="0 0 35 32">
                      <path
                        d="M17.0193 22.5C19.9567 22.5 22.3379 20.2614 22.3379 17.5C22.3379 14.7386 19.9567 12.5 17.0193 12.5C14.082 12.5 11.7008 14.7386 11.7008 17.5C11.7008 20.2614 14.082 22.5 17.0193 22.5Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.0608 14.5C27.2997 14.4981 28.5219 14.7683 29.63 15.2892C30.7381 15.81 31.7014 16.5671 32.443 17.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.59558 17.5C2.33725 16.5671 3.30054 15.81 4.40862 15.2892C5.51671 14.7683 6.73893 14.4981 7.97781 14.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.36063 27C10.0611 25.6514 11.1504 24.5148 12.5045 23.7198C13.8585 22.9247 15.4229 22.5032 17.0193 22.5032C18.6157 22.5032 20.1801 22.9247 21.5341 23.7198C22.8882 24.5148 23.9775 25.6514 24.678 27"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.97778 14.5C7.17021 14.5008 6.37909 14.2855 5.69685 13.8792C5.01461 13.473 4.46943 12.8927 4.12501 12.206C3.78059 11.5193 3.65115 10.7546 3.75182 10.0014C3.85249 9.24809 4.17911 8.5373 4.69352 7.95206C5.20793 7.36681 5.88887 6.93127 6.6568 6.69634C7.42473 6.4614 8.24791 6.43677 9.03018 6.62532C9.81244 6.81388 10.5215 7.20782 11.0744 7.76113C11.6274 8.31444 12.0014 9.00427 12.1528 9.75"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.8857 9.75C22.0372 9.00427 22.4112 8.31444 22.9642 7.76113C23.5171 7.20782 24.2261 6.81388 25.0084 6.62532C25.7907 6.43677 26.6139 6.4614 27.3818 6.69634C28.1497 6.93127 28.8307 7.36681 29.3451 7.95206C29.8595 8.5373 30.1861 9.24809 30.2868 10.0014C30.3874 10.7546 30.258 11.5193 29.9136 12.206C29.5692 12.8927 29.024 13.473 28.3417 13.8792C27.6595 14.2855 26.8684 14.5008 26.0608 14.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>SOBRE</p>
                  </a>
                </li>
                <li>
                  <a href="procedimentos">
                    <svg
                      width="37"
                      height="32"
                      viewBox="0 0 37 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.0641 7V22.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.4047 19.05C27.5196 19.1 30.5115 18.8875 31.6122 15C32.713 11.1125 33.715 6 29.3542 6C24.9934 6 18.0642 12 18.0642 16C18.0642 12 11.1349 6 6.77408 6C2.41329 6 3.38706 11 4.51606 15C5.64507 19 8.60872 19.1 9.72361 19.05"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.4191 18.025C11.4445 18.1215 10.5223 18.4658 9.76378 19.0162C9.00524 19.5667 8.44276 20.2998 8.14421 21.1271C7.84567 21.9545 7.82383 22.8407 8.08133 23.6788C8.33882 24.5168 8.86465 25.271 9.59535 25.8503C10.3261 26.4295 11.2304 26.8091 12.1993 26.9432C13.1681 27.0773 14.1601 26.9601 15.0555 26.6059C15.9508 26.2517 16.7114 25.6756 17.2452 24.947C17.7791 24.2184 18.0635 23.3686 18.0641 22.5C18.0647 23.3686 18.3491 24.2184 18.883 24.947C19.4169 25.6756 20.1774 26.2517 21.0727 26.6059C21.9681 26.9601 22.9601 27.0773 23.9289 26.9432C24.8978 26.8091 25.8022 26.4295 26.5329 25.8503C27.2636 25.271 27.7894 24.5168 28.0469 23.6788C28.3044 22.8407 28.2825 21.9545 27.984 21.1271C27.6855 20.2998 27.123 19.5667 26.3644 19.0162C25.6059 18.4658 24.6837 18.1215 23.7091 18.025"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>PROCEDIMENTOS</p>
                  </a>
                  <span>
                    <ul></ul>
                  </span>
                </li>
                <li>
                  <a href="tratamentos">
                    <svg
                      width="26"
                      height="26"
                      viewBox="0 0 26 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5593 2.42078L23.4009 7.26234"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.9108 4.84158L20.9801 12.9109"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.1212 6.05197L5.07355 15.0997C4.99964 15.1739 4.94111 15.262 4.9013 15.359C4.86149 15.4559 4.84119 15.5597 4.84156 15.6645V20.9801H10.1572C10.262 20.9805 10.3658 20.9602 10.4627 20.9204C10.5596 20.8806 10.6478 20.8221 10.722 20.7481L19.7697 11.7005"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.2883 9.88486L12.9108 12.5074"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.46407 12.7091L10.0866 15.3316"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.9455 8.87622L20.9801 4.84158"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.84156 20.9801L2.42078 23.4009"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>TRATAMENTOS</p>
                  </a>
                </li>

                <li>
                  <a href="produtos">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M23 23H8.725L5.2375 3.825C5.1967 3.59537 5.07691 3.38722 4.89887 3.23657C4.72082 3.08592 4.49572 3.00223 4.2625 3H2"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 28C11.3807 28 12.5 26.8807 12.5 25.5C12.5 24.1193 11.3807 23 10 23C8.61929 23 7.5 24.1193 7.5 25.5C7.5 26.8807 8.61929 28 10 28Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23 28C24.3807 28 25.5 26.8807 25.5 25.5C25.5 24.1193 24.3807 23 23 23C21.6193 23 20.5 24.1193 20.5 25.5C20.5 26.8807 21.6193 28 23 28Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.8125 18H23.5125C23.98 18.0014 24.433 17.838 24.7919 17.5386C25.1508 17.2391 25.3927 16.8227 25.475 16.3625L27 8H6"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>PRODUTOS</p>
                  </a>
                </li>
                <li>
                  <a href="consorcio">
                    <svg
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 21.25C19.934 21.25 22.3125 18.8715 22.3125 15.9375C22.3125 13.0035 19.934 10.625 17 10.625C14.066 10.625 11.6875 13.0035 11.6875 15.9375C11.6875 18.8715 14.066 21.25 17 21.25Z"
                        stroke-width="2"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M8.47345 26.4828C9.27286 24.9082 10.4927 23.5857 11.9977 22.6619C13.5027 21.7382 15.2341 21.2492 17 21.2492C18.7659 21.2492 20.4973 21.7382 22.0023 22.6619C23.5073 23.5857 24.7272 24.9082 25.5266 26.4828"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.5625 9.5625C27.7361 9.5625 28.6875 8.61111 28.6875 7.4375C28.6875 6.26389 27.7361 5.3125 26.5625 5.3125C25.3889 5.3125 24.4375 6.26389 24.4375 7.4375C24.4375 8.61111 25.3889 9.5625 26.5625 9.5625Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.5625 5.3125V3.71875"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.7164 6.375L23.3484 5.57812"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M24.7164 8.5L23.3484 9.29688"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M26.5625 9.5625V11.1563"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M28.4086 8.5L29.7765 9.29688"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M28.4086 6.375L29.7765 5.57812"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M29.657 15.4727C29.7215 15.9792 29.7525 16.4894 29.75 17C29.75 19.5217 29.0022 21.9868 27.6012 24.0835C26.2003 26.1803 24.209 27.8145 21.8792 28.7795C19.5495 29.7445 16.9859 29.997 14.5126 29.505C12.0393 29.0131 9.76751 27.7988 7.98439 26.0156C6.20127 24.2325 4.98696 21.9607 4.49499 19.4874C4.00303 17.0142 4.25552 14.4506 5.22054 12.1208C6.18556 9.79105 7.81976 7.79977 9.91649 6.39878C12.0132 4.99779 14.4783 4.25002 17 4.25002C17.3947 4.24753 17.7892 4.26526 18.182 4.30314"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>CONSÓRCIO</p>
                  </a>
                </li>

                <li>
                  <a href="contato">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.9012 4.48749L3.17088 11.05C2.96036 11.1042 2.7727 11.2183 2.63347 11.3766C2.49423 11.5349 2.41019 11.7299 2.39279 11.9348C2.37538 12.1398 2.42546 12.3448 2.53621 12.522C2.64696 12.6992 2.81298 12.8399 3.01167 12.925L14.3685 17.9875C14.591 18.0846 14.7697 18.2529 14.8727 18.4625L20.246 29.1625C20.3363 29.3497 20.4856 29.5061 20.6737 29.6105C20.8617 29.7148 21.0793 29.762 21.2969 29.7456C21.5144 29.7292 21.7213 29.65 21.8894 29.5188C22.0575 29.3876 22.1785 29.2108 22.2361 29.0125L29.2014 5.71249C29.2542 5.54246 29.2575 5.36219 29.2109 5.19056C29.1643 5.01894 29.0695 4.86228 28.9366 4.73702C28.8036 4.61175 28.6374 4.52249 28.4552 4.47859C28.273 4.43469 28.0817 4.43776 27.9012 4.48749V4.48749Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.7134 18.1375L20.7103 12.4875"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>CONTATO</p>
                  </a>
                </li>
                <li>
{/*                   <a
                    href="http://jcambiental.uplog.eco.br/wp-login.php?redirect_to=http%3A%2F%2Fjcambiental.uplog.eco.br%2Fwp-admin%2F&reauth=1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.23068 25.1875C6.01009 24.0375 6.8194 21.625 6.19583 20.2125C5.57227 18.8 3.18414 17.5625 3.18414 16C3.18414 14.4375 5.54573 13.25 6.19583 11.7875C6.84593 10.325 6.01009 7.9625 7.23068 6.8125C8.45128 5.6625 11.0119 6.425 12.5111 5.8375C14.0103 5.25 15.3238 3 16.9822 3C18.6406 3 19.901 5.225 21.4533 5.8375C23.0056 6.45 25.5131 5.6625 26.7337 6.8125C27.9543 7.9625 27.145 10.375 27.7685 11.7875C28.3921 13.2 30.7802 14.4375 30.7802 16C30.7802 17.5625 28.4186 18.75 27.7685 20.2125C27.1184 21.675 27.9543 24.0375 26.7337 25.1875C25.5131 26.3375 22.9525 25.575 21.4533 26.1625C19.9541 26.75 18.6406 29 16.9822 29C15.3238 29 14.0634 26.775 12.5111 26.1625C10.9588 25.55 8.45128 26.3375 7.23068 25.1875Z"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.8199 13L15.0319 20L11.1446 16.5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <p>LISTA VIP</p>
                  </a> */}
                </li>
              </ul>
            </nav>
          </section>
        </Grid1>

        <Grid2>
          <ButtomWhatsApp>
            <a
              title="Enviar mensagem para o WhatsApp"
              href="https://api.whatsapp.com/message/MN64IAXQPVMGO1?autoload=1&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={imgWhatsApp} alt="Logo" />
            </a>
          </ButtomWhatsApp>
        </Grid2>
      </Grid>
    </Container>
  );
}
