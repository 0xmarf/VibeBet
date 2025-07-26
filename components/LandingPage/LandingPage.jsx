import "./LandingPage.css";
import { Logomark } from "../Logomark/Logomark.jsx";
import { IconChevronDown } from "../IconChevronDown/IconChevronDown.jsx";
import { ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop } from "../ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop/ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop.jsx";
import { IconSearch } from "../IconSearch/IconSearch.jsx";
import { IconCircle } from "../IconCircle/IconCircle.jsx";
import { ButtonVariantGhostStateDefaultSizeIcon } from "../ButtonVariantGhostStateDefaultSizeIcon/ButtonVariantGhostStateDefaultSizeIcon.jsx";
import { AvatarTypeImageSize12 } from "../AvatarTypeImageSize12/AvatarTypeImageSize12.jsx";
import { IconWallet } from "../IconWallet/IconWallet.jsx";
import { ButtonVariantDefaultStateDefaultSizeDefault } from "../ButtonVariantDefaultStateDefaultSizeDefault/ButtonVariantDefaultStateDefaultSizeDefault.jsx";
import { ProBlocksPageHeader2BreakpointDesktop } from "../ProBlocksPageHeader2BreakpointDesktop/ProBlocksPageHeader2BreakpointDesktop.jsx";
import { TableHeadRightTextAlignNoStateDefault } from "../TableHeadRightTextAlignNoStateDefault/TableHeadRightTextAlignNoStateDefault.jsx";

export const LandingPage = ({ className, ...props }) => {
  return (
    <div className={"landing-page " + className}>
      <div className="pro-blocks-app-shell-1">
        <div className="pro-blocks-navbar-1">
          <div className="container">
            <div className="flex">
              <Logomark className="logomark-instance"></Logomark>
              <div className="nav">
                <ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop
                  dropdownIcon={
                    <IconChevronDown className="icon-chevron-down-instance" />
                  }
                  text="World"
                  current="yes"
                  className="pro-blocks-navbar-link-instance"
                ></ProBlocksNavbarLinkStateDefaultCurrentYesBreakpointDesktop>
              </div>
            </div>
            <div className="flex2">
              <ButtonVariantGhostStateDefaultSizeIcon
                leftIcon={<IconSearch className="icon-search-instance" />}
                rightIcon={<IconCircle className="icon-circle-instance" />}
                variant="ghost"
                size="icon"
                className="button-instance"
              ></ButtonVariantGhostStateDefaultSizeIcon>
              <AvatarTypeImageSize12 className="avatar-instance"></AvatarTypeImageSize12>
              <ButtonVariantDefaultStateDefaultSizeDefault
                buttonText="Connect Wallet"
                showLeftIcon={true}
                leftIcon={<IconWallet className="icon-wallet-instance" />}
                rightIcon={<IconCircle className="icon-circle-instance2" />}
                className="button-instance"
              ></ButtonVariantDefaultStateDefaultSizeDefault>
            </div>
          </div>
        </div>
        <ProBlocksPageHeader2BreakpointDesktop
          titleText="Price meets Popularity. Trade what’s trending on X."
          descriptionText="This page tracks a trending topic’s tweet count and its corresponding IFT price from the moment it appears in X’s U.S. Top 50. Data updates hourly and topics remain on the chart for up to 24 hours."
          button1={false}
          button2={false}
          button3={false}
          button4={false}
          visibleComponent={false}
          button23ButtonText="Sort: Trending"
          button23RightIcon={
            <IconChevronDown className="icon-chevron-down-instance3" />
          }
          button23ShowRightIcon={true}
          className="pro-blocks-page-header-2-instance"
        ></ProBlocksPageHeader2BreakpointDesktop>
        <div className="div">
          <div className="container2">
            <div className="flex-vertical">
              <div className="grid">
                <TableHeadRightTextAlignNoStateDefault
                  tableHeadText="Topic / Timeframe"
                  className="table-head-instance"
                ></TableHeadRightTextAlignNoStateDefault>
                <div className="component-4">
                  <ButtonVariantDefaultStateDefaultSizeDefault
                    buttonText="Trade $americaparty"
                    leftIcon={<IconCircle className="icon-circle-instance3" />}
                    rightIcon={<IconCircle className="icon-circle-instance2" />}
                    className="button-instance2"
                  ></ButtonVariantDefaultStateDefaultSizeDefault>
                  <div className="table-cell">
                    <div className="text-wrapper">
                      <div className="america-party">America Party </div>
                    </div>
                  </div>
                  <div className="table-cell2">
                    <div className="text-wrapper2">
                      <div className="elon-musk-launched-a-new-fiscal-conservative-third-party-challenging-the-republican-democrat-duopoly">
                        Elon Musk launched a new fiscal‑conservative third party
                        challenging the Republican‑Democrat duopoly.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="chart-wrapper">
                    <img
                      className="multitype-chart"
                      src="multitype-chart0.svg"
                    />
                  </div>
                  <TableHeadRightTextAlignNoStateDefault
                    tableHeadText="Trade"
                    showText={false}
                    className="table-head-instance2"
                  ></TableHeadRightTextAlignNoStateDefault>
                </div>
                <div className="component-5">
                  <ButtonVariantDefaultStateDefaultSizeDefault
                    buttonText="Trade $bondi"
                    leftIcon={<IconCircle className="icon-circle-instance3" />}
                    rightIcon={<IconCircle className="icon-circle-instance2" />}
                    className="button-instance2"
                  ></ButtonVariantDefaultStateDefaultSizeDefault>
                  <div className="table-cell">
                    <div className="text-wrapper">
                      <div className="epstein">Bondi </div>
                    </div>
                  </div>
                  <div className="table-cell2">
                    <div className="text-wrapper2">
                      <div className="pam-bondi-trending-as-doj-clarifies-no-epstein-client-list-existed-she-walked-back-earlier-assertions">
                        Pam Bondi trending as DOJ clarifies: no Epstein
                        &quot;client list&quot; existed, she walked back earlier
                        assertions.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="chart-wrapper2">
                    <img
                      className="multitype-chart2"
                      src="multitype-chart1.svg"
                    />
                  </div>
                  <TableHeadRightTextAlignNoStateDefault
                    tableHeadText="Trade"
                    showText={false}
                    className="table-head-instance2"
                  ></TableHeadRightTextAlignNoStateDefault>
                </div>
                <TableHeadRightTextAlignNoStateDefault
                  tableHeadText="Trade"
                  className="table-head-instance3"
                ></TableHeadRightTextAlignNoStateDefault>
                <div className="component-1">
                  <ButtonVariantDefaultStateDefaultSizeDefault
                    buttonText="Trade $epstein"
                    leftIcon={<IconCircle className="icon-circle-instance3" />}
                    rightIcon={<IconCircle className="icon-circle-instance2" />}
                    className="button-instance2"
                  ></ButtonVariantDefaultStateDefaultSizeDefault>
                  <div className="table-cell">
                    <div className="text-wrapper">
                      <div className="epstein">Epstein </div>
                    </div>
                  </div>
                  <div className="table-cell2">
                    <div className="text-wrapper2">
                      <div className="doj-fbi-conclude-epstein-had-no-client-list-died-by-suicide">
                        DOJ, FBI conclude Epstein had no &quot;client
                        list,&quot; died by suicide.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="chart-wrapper3">
                    <img
                      className="multitype-chart3"
                      src="multitype-chart2.svg"
                    />
                    <div className="tooltip">
                      <div className="tooltip-content">
                        <span>
                          <span className="tooltip-content-span">
                            20250708 18:00 UTC+0
                            <br />
                          </span>
                          <span className="tooltip-content-span2">
                            Price: $0.01984
                            <br />
                          </span>
                          <span className="tooltip-content-span3">
                            Tweet Count: 2M
                          </span>
                        </span>{" "}
                      </div>
                      <img className="arrow" src="arrow0.svg" />
                    </div>
                  </div>
                  <TableHeadRightTextAlignNoStateDefault
                    tableHeadText="Trade"
                    showText={false}
                    className="table-head-instance2"
                  ></TableHeadRightTextAlignNoStateDefault>
                </div>
                <div className="x-axis">
                  <div className="frame-9">
                    <div className="t">T </div>
                  </div>
                  <div className="frame-10">
                    <div className="t-6-hrs">T+6 HRS </div>
                  </div>
                  <div className="frame-11">
                    <div className="t-12-hrs">T+12 HRS </div>
                  </div>
                  <div className="frame-12">
                    <div className="t-18-hrs">T+18 HRS </div>
                  </div>
                  <div className="frame-13">
                    <div className="t-24-hrs">T+24HRS </div>
                  </div>
                </div>
                <div className="component-3">
                  <ButtonVariantDefaultStateDefaultSizeDefault
                    buttonText="Trade $superman"
                    leftIcon={<IconCircle className="icon-circle-instance3" />}
                    rightIcon={<IconCircle className="icon-circle-instance2" />}
                    className="button-instance2"
                  ></ButtonVariantDefaultStateDefaultSizeDefault>
                  <div className="table-cell">
                    <div className="text-wrapper">
                      <div className="superman">Superman </div>
                    </div>
                  </div>
                  <div className="table-cell2">
                    <div className="text-wrapper2">
                      <div className="james-gunn-s-glossy-reboot-hits-july-11-sparking-buzz-controversy">
                        James Gunn’s glossy reboot hits July 11, sparking buzz,
                        controversy.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="chart-wrapper4">
                    <div className="chart-area-chart">
                      <img
                        className="multitype-chart4"
                        src="multitype-chart3.svg"
                      />
                    </div>
                  </div>
                  <TableHeadRightTextAlignNoStateDefault
                    tableHeadText="Trade"
                    showText={false}
                    className="table-head-instance2"
                  ></TableHeadRightTextAlignNoStateDefault>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container3">
        <div className="flex3">
          <div className="copyright-2025-element-labs">
            Copyright 2025 © Element Labs{" "}
          </div>
          <div className="flex4">
            <div className="privacy-policy">Privacy Policy </div>
            <div className="terms-of-service">Terms of Service </div>
          </div>
        </div>
      </div>
    </div>
  );
};
