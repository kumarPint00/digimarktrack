"use client";
import footerarrow from "../../../../../../../public/footerarrowwebp.webp";
import { useTranslation } from "react-i18next";
import { ListItem } from "@mui/material";
import Image from "next/image";
import { CopyWriteTextTypo, FooterTextTypo, ListText } from "./styled";

export const ListOne = () => {
  const { t } = useTranslation();
  return [
    { text: t("landingPage:footer.links.link1"), icon: footerarrow },
    { text: t("landingPage:footer.links.link2"), icon: footerarrow },
    { text: t("landingPage:footer.links.link3"), icon: footerarrow },
    { text: t("landingPage:footer.links.link4"), icon: footerarrow },
  ];
};
export const ListTwo = () => {
  const { t } = useTranslation();
  return [
    { text: t("landingPage:footer.links.link5"), icon: footerarrow },
    { text: t("landingPage:footer.links.link6"), icon: footerarrow },
    { text: t("landingPage:footer.links.link7"), icon: footerarrow },
    { text: t("landingPage:footer.links.link8"), icon: footerarrow },
  ];
};

export const Address = () => {
  const { t } = useTranslation();
  return [
    t("landingPage:footer.address.address1"),
    t("landingPage:footer.address.address2"),
  ];
};

export const CopyWriteText = () => {
  const { t } = useTranslation();
  return [
    t("landingPage:footer.copywrite.text1"),
    t("landingPage:footer.copywrite.text2"),
    t("landingPage:footer.copywrite.text3"),
  ];
};

export const ListComponentOne = () => {
  return (
    <>
      {ListOne().map((item, index) => (
        <ListItem key={index} disablePadding>
          <Image src={item.icon} alt="image" height={22} width={22} />{" "}
          <ListText primary={item.text} />
        </ListItem>
      ))}
    </>
  );
};

export const ListComponentTwo = () => {
  return (
    <>
      {ListTwo().map((item, index) => (
        <ListItem key={index} disablePadding>
          <Image src={item.icon} alt="image" height={22} width={22} />
          <ListText primary={item.text} />
        </ListItem>
      ))}
    </>
  );
};

export const AddressComponent = () => {
  return (
    <>
      {Address().map((item, index) => (
        <FooterTextTypo
          key={index}
          variant="body1"
          color="initial"
          gutterBottom
        >
          {item}
        </FooterTextTypo>
      ))}
    </>
  );
};

export const CopyRightComponent = () => {
  return (
    <>
      {CopyWriteText().map((item, index) => (
        <CopyWriteTextTypo
          key={index}
          variant="body2"
          color="initial"
          gutterBottom
        >
          {item}
        </CopyWriteTextTypo>
      ))}
    </>
  );
};
