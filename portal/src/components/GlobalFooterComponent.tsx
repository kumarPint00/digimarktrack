"use client";
import React from "react";
import { Container, Grid, List, ListItem } from "@mui/material";
import Image from "next/image";
import { TranslationAtom } from "@/components/TranslationAtom";
import { Box, ListItemText, Typography, styled } from "@mui/material";
import { useTranslation } from "react-i18next";
import face from "../../public/facewebp.webp";
import x from "../../public/xwebp.webp";
import linked from "../../public/linkedwebp.webp";
import insta from "../../public/instawebp.webp";
import addcall from "../../public/addcallwebp.webp";
import addtel from "../../public/addtelwebp.webp";
import addmail from "../../public/addmailwebp.webp";
import footerarrow from "../../public/footerarrowwebp.webp";
import logo from "../../public/footer logo 360.webp";

const FooterIcons = [insta, x, face, linked];

const AddressIconText = [
  { text: "+971 52 214 2913", icon: addcall },
  { text: "(04) 834 3814", icon: addtel },
  { text: "info@trackers.ae", icon: addmail },
];

export const Address = () => {
  const { t } = useTranslation();
  return [
    t("landingPage:footer.address.address1"),
    t("landingPage:footer.address.address2"),
  ];
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

export const CopyWriteText = () => {
  const { t } = useTranslation();
  return [
    t("landingPage:footer.copywrite.text1"),
    t("landingPage:footer.copywrite.text2"),
    t("landingPage:footer.copywrite.text3"),
  ];
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

export const ListOne = () => {
  const { t } = useTranslation();
  return [
    { text: t("landingPage:footer.links.link1"), icon: footerarrow },
    { text: t("landingPage:footer.links.link2"), icon: footerarrow },
    { text: t("landingPage:footer.links.link3"), icon: footerarrow },
    { text: t("landingPage:footer.links.link4"), icon: footerarrow },
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

export const ListTwo = () => {
  const { t } = useTranslation();
  return [
    { text: t("landingPage:footer.links.link5"), icon: footerarrow },
    { text: t("landingPage:footer.links.link6"), icon: footerarrow },
    { text: t("landingPage:footer.links.link7"), icon: footerarrow },
    { text: t("landingPage:footer.links.link8"), icon: footerarrow },
  ];
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

export const MainBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url("/footerimgwebp.webp")`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  [theme.breakpoints.down("sm")]: {
    position: "relative",
    top: "2rem",
    height: "100%",
    backgroundPosition: "top",
  },
}));
export const FirstGridBox = styled(Box)(({ theme }) => ({
  padding: "0rem 3rem",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem 0rem",
  },
}));
export const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  padding: "1rem 0rem",
}));
export const ListMainBox = styled(Box)(({ theme }) => ({
  padding: "0rem 4rem",
  [theme.breakpoints.down("sm")]: {
    padding: "0rem 0rem",
  },
}));
export const ListBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
export const AddIconTextBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: "5px",
}));
export const LogoImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
}));
export const CopywriteBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1rem 4rem",
  [theme.breakpoints.down("sm")]: {
    padding: "1rem 0rem",
  },
}));
export const PositionRelativeBox = styled(Box)(({ theme }) => ({
  position: "relative",
  top: "-3rem",
  marginBottom: "-200px",
  marginTop: "8rem",
}));
export const FooterMainBox = styled(Box)(({ theme }) => ({
  borderBottom: "2px solid white",
  padding: "1rem 0rem",
  paddingTop: "14rem",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "0rem",
  },
}));
export const FooterTextTypo = styled(Typography)(({ theme }) => ({
  color: "white",
  // fontFamily: "cursive",
  textAlign: "justify",
}));
export const LinkHeadTypo = styled(Typography)(({ theme }) => ({
  color: "white",
  // fontFamily: "cursive",
  borderBottom: "2px solid white",
}));
export const AddressIconTextTypo = styled(Typography)(({ theme }) => ({
  color: "white",
  // fontFamily: "cursive",
  marginLeft: "15px",
  fontSize: "1rem",
  marginBottom: "0px",
}));
export const CopyWriteTextTypo = styled(Typography)(({ theme }) => ({
  color: "white",
  // fontFamily: "cursive",
  fontSize: "1rem",
  marginBottom: "0px",
}));
export const ListText = styled(ListItemText)(({ theme }) => ({
  color: "white",
  textTransform: "capitalize",
  // fontFamily: "cursive",
  fontSize: "18px",
  marginLeft: "10px",
  cursor: "pointer",
}));

const GlobalFooterComponent = () => {
  return (
    <>
      <MainBox>
        <Container maxWidth="xl">
          <FooterMainBox>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <FirstGridBox>
                  <LogoImageBox>
                    <Image src={logo} alt="logo" height={50} width={100} />
                  </LogoImageBox>
                  <FooterTextTypo variant="body1" color="initial" gutterBottom>
                    <TranslationAtom word="landingPage:footer.para" />
                  </FooterTextTypo>
                  <ImageBox>
                    {FooterIcons.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="image"
                        height={32}
                        width={32}
                      />
                    ))}
                  </ImageBox>
                </FirstGridBox>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ListMainBox>
                  <LinkHeadTypo variant="h6" color="initial" gutterBottom>
                    <TranslationAtom word="landingPage:footer.links.heading" />
                  </LinkHeadTypo>
                  <ListBox>
                    <List>
                      <ListComponentOne />
                    </List>
                    <List>
                      <ListComponentTwo />
                    </List>
                  </ListBox>
                </ListMainBox>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ListMainBox>
                  <LinkHeadTypo variant="h6" color="initial" gutterBottom>
                    Our Offices
                  </LinkHeadTypo>
                  <AddressComponent />
                  {AddressIconText.map((item, index) => (
                    <AddIconTextBox key={index}>
                      <Image
                        src={item.icon}
                        alt="image"
                        height={18}
                        width={16}
                      />
                      <AddressIconTextTypo
                        variant="body2"
                        color="initial"
                        gutterBottom
                      >
                        {item.text}
                      </AddressIconTextTypo>
                    </AddIconTextBox>
                  ))}
                </ListMainBox>
              </Grid>
            </Grid>
          </FooterMainBox>
          <CopywriteBox>
            <CopyRightComponent />
          </CopywriteBox>
        </Container>
      </MainBox>
    </>
  );
};

export default GlobalFooterComponent;
