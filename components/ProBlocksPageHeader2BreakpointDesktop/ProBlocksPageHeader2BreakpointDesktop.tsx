import React from "react";
import "./ProBlocksPageHeader2BreakpointDesktop.css";
import { IconChevronRight } from "../IconChevronRight/IconChevronRight";
import { BreadcrumbBreadcrumbItemVariantLinkStateDefault } from "../BreadcrumbBreadcrumbItemVariantLinkStateDefault/BreadcrumbBreadcrumbItemVariantLinkStateDefault";
import { BreadcrumbSizeMd } from "../BreadcrumbSizeMd/BreadcrumbSizeMd";
import { IconCircle } from "../IconCircle/IconCircle";
import { ButtonVariantOutlineStateDefaultSizeDefault } from "../ButtonVariantOutlineStateDefaultSizeDefault/ButtonVariantOutlineStateDefaultSizeDefault";
import { ButtonVariantDefaultStateDefaultSizeDefault } from "../ButtonVariantDefaultStateDefaultSizeDefault/ButtonVariantDefaultStateDefaultSizeDefault";

interface ProBlocksPageHeader2BreakpointDesktopProps {
  titleText?: string | React.ReactNode;
  description?: boolean;
  descriptionText?: string;
  buttons?: boolean;
  button1?: boolean;
  button2?: boolean;
  button3?: boolean;
  button4?: boolean;
  breakpoint?: string;
  className?: string;
}

export const ProBlocksPageHeader2BreakpointDesktop: React.FC<ProBlocksPageHeader2BreakpointDesktopProps> = ({
  titleText = "Project alpha",
  description = true,
  descriptionText = "Manage your project's details such as name, image, description and settings.",
  buttons = true,
  button1 = true,
  button2 = true,
  button3 = true,
  button4 = true,
  breakpoint = "desktop",
  className = ""
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
          className="breadcrumb-instance"
        />
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
                    />
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
                    />
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
                    />
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
                    />
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