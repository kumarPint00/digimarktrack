import React from "react";
import { Container, Grid, List } from "@mui/material";
import Image from "next/image";
import logo from "../../../../../../../public/footer logo 360.webp";
import {
  AddIconTextBox,
  AddressIconTextTypo,
  CopywriteBox,
  FirstGridBox,
  FooterMainBox,
  FooterTextTypo,
  ImageBox,
  LinkHeadTypo,
  ListBox,
  ListMainBox,
  LogoImageBox,
  MainBox,
} from "./styled";
import {
  AddressComponent,
  CopyRightComponent,
  ListComponentOne,
  ListComponentTwo,
} from "./data";
import { TranslationAtom } from "@/components/TranslationAtom";
import face from "../../../../../../../public/facewebp.webp";
import x from "../../../../../../../public/xwebp.webp";
import linked from "../../../../../../../public/linkedwebp.webp";
import insta from "../../../../../../../public/instawebp.webp";
import addcall from "../../../../../../../public/addcallwebp.webp";
import addtel from "../../../../../../../public/addtelwebp.webp";
import addmail from "../../../../../../../public/addmailwebp.webp";

const FooterIcons = [insta, x, face, linked];

const AddressIconText = [
  { text: "+971 52 214 2913", icon: addcall },
  { text: "(04) 834 3814", icon: addtel },
  { text: "info@trackers.ae", icon: addmail },
];

const FooterComponent = () => {
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

export default FooterComponent;
