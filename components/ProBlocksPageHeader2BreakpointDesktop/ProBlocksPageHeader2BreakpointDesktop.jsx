import "./ProBlocksPageHeader2BreakpointDesktop.css";
import { IconChevronRight } from "../IconChevronRight/IconChevronRight.jsx";
import { BreadcrumbBreadcrumbItemVariantLinkStateDefault } from "../BreadcrumbBreadcrumbItemVariantLinkStateDefault/BreadcrumbBreadcrumbItemVariantLinkStateDefault.jsx";
import { BreadcrumbBreadcrumbItemVariantEllipsisStateDefault } from "../BreadcrumbBreadcrumbItemVariantEllipsisStateDefault/BreadcrumbBreadcrumbItemVariantEllipsisStateDefault.jsx";
import { BreadcrumbSizeMd } from "../BreadcrumbSizeMd/BreadcrumbSizeMd.jsx";
import { IconCircle } from "../IconCircle/IconCircle.jsx";
import { ButtonVariantOutlineStateDefaultSizeDefault } from "../ButtonVariantOutlineStateDefaultSizeDefault/ButtonVariantOutlineStateDefaultSizeDefault.jsx";
import { ButtonVariantDefaultStateDefaultSizeDefault } from "../ButtonVariantDefaultStateDefaultSizeDefault/ButtonVariantDefaultStateDefaultSizeDefault.jsx";

export const ProBlocksPageHeader2BreakpointDesktop = ({
  titleText = "Project alpha",
  description = true,
  descriptionText = "Manage your project’s details such as name, image, description and settings.",
  buttons = true,
  button1 = true,
  button2 = true,
  button3 = true,
  button4 = true,
  pageSelect = false,
  breakpoint = "desktop",
  visibleComponent = undefined,
  className,
  ...props
}) => {
  const variantsClassName = "breakpoint-" + breakpoint;

  return (
    <div
      className={
        "pro-blocks-page-header-2-breakpoint-desktop " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="container">
        <BreadcrumbSizeMd
          separator={
            <IconChevronRight className="icon-chevron-right-instance" />
          }
          breadcrumb3={false}
          breadcrumb4={false}
          breadcrumb5={false}
          component={
            <BreadcrumbBreadcrumbItemVariantLinkStateDefault
              className="breadcrumb-breadcrumb-item-instance"
              breadcrumbText="Settings"
              variant="link"
            />
          }
          breadcrumbBreadcrumbItembreadcrumbText="Home"
          breadcrumbBreadcrumbItemvariant="link"
          className="breadcrumb-instance"
        ></BreadcrumbSizeMd>
        <div className="flex">
          <div className="div">
            <div className="project-alpha">{titleText} </div>
            {description && (
              <>
                <div className="manage-your-project-s-details-such-as-name-image-description-and-settings">
                  {descriptionText}{" "}
                </div>
              </>
            )}
          </div>
          {buttons && (
            <>
              <div className="flex2">
                {button4 && (
                  <>
                    <ButtonVariantOutlineStateDefaultSizeDefault
                      buttonText="Share"
                      leftIcon={<IconCircle className="icon-circle-instance" />}
                      rightIcon={
                        <IconCircle className="icon-circle-instance" />
                      }
                      variant="outline"
                      className="button-instance"
                    ></ButtonVariantOutlineStateDefaultSizeDefault>
                  </>
                )}
                {button3 && (
                  <>
                    <ButtonVariantOutlineStateDefaultSizeDefault
                      buttonText="View"
                      leftIcon={<IconCircle className="icon-circle-instance" />}
                      rightIcon={
                        <IconCircle className="icon-circle-instance" />
                      }
                      variant="outline"
                      className="button-instance"
                    ></ButtonVariantOutlineStateDefaultSizeDefault>
                  </>
                )}
                {button2 && (
                  <>
                    <ButtonVariantOutlineStateDefaultSizeDefault
                      buttonText="Edit"
                      leftIcon={<IconCircle className="icon-circle-instance" />}
                      rightIcon={
                        <IconCircle className="icon-circle-instance" />
                      }
                      variant="outline"
                      className="button-instance"
                    ></ButtonVariantOutlineStateDefaultSizeDefault>
                  </>
                )}
                {button1 && (
                  <>
                    <ButtonVariantDefaultStateDefaultSizeDefault
                      buttonText="Publish"
                      leftIcon={<IconCircle className="icon-circle-instance" />}
                      rightIcon={
                        <IconCircle className="icon-circle-instance2" />
                      }
                      className="button-instance"
                    ></ButtonVariantDefaultStateDefaultSizeDefault>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
