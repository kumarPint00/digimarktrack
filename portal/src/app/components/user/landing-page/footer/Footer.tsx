import React from "react";
import NewsLetter from "../newsLetter/NewsLetter";
import { Box, Container, Grid, List, ListItem, Typography } from "@mui/material";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import {
  AddIconTextBox,
  AddressIconTextTypo,
  CopywriteBox,
  CopyWriteTextTypo,
  FirstGridBox,
  FooterMainBox,
  FooterTextTypo,
  ImageBox,
  LinkHeadTypo,
  ListBox,
  ListMainBox,
  ListText,
  MainBox,
} from "./styled";
import {
  FooterIcons,
} from "./data";

const Footer = () => {
  const t = useTranslations('footer');
  const description = t('description');
  const linksHeading = t('linksHeading');
  const ourOfficesHeading = t('ourOfficesHeading');
  const copywriteText = t('copywriteText');
  const address = t('address');
  const addressIconText = t('addressIconText');

  return (
    <>
      <NewsLetter />
      <MainBox>
        <Container maxWidth="xl">
          <FooterMainBox>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <FirstGridBox>
                  <FooterTextTypo variant="body1" color="initial" gutterBottom>
                    {description}
                  </FooterTextTypo>
                  <ImageBox>
                    <Image
                      src={FooterIcons[0]}
                      alt="image"
                      height={32}
                      width={32}
                    />
                    <Image
                      src={FooterIcons[1]}
                      alt="image"
                      height={32}
                      width={32}
                    />
                    <Image
                      src={FooterIcons[2]}
                      alt="image"
                      height={32}
                      width={32}
                    />
                    <Image
                      src={FooterIcons[3]}
                      alt="image"
                      height={32}
                      width={32}
                    />
                    </ImageBox>
                </FirstGridBox>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ListMainBox>
                  <LinkHeadTypo variant="h6" color="initial" gutterBottom>
                    {linksHeading}
                  </LinkHeadTypo>
                  <ListBox>
                    <List>
                    <ListItem disablePadding>
                        <ListText primary={t('listOne.0.text')} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListText primary={t('listOne.1.text')} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListText primary={t('listOne.2.text')} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListText primary={t('listOne.3.text')} />
                      </ListItem>
                    </List>
                    <List>
                      <ListItem disablePadding>
                        <ListText primary={t('listTwo.0.text')} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListText primary={t('listTwo.1.text')} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListText primary={t('listTwo.2.text')} />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListText primary={t('listTwo.3.text')} />
                      </ListItem>
                    </List>
                  </ListBox>
                </ListMainBox>
              </Grid>
              <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <ListMainBox>
                  <LinkHeadTypo variant="h6" color="initial" gutterBottom>
                    {ourOfficesHeading}
                  </LinkHeadTypo>
                  <FooterTextTypo variant="body1" color="initial" gutterBottom>
                   {t('address.0')}
                  </FooterTextTypo>
                  <AddIconTextBox>
                    <AddressIconTextTypo
                      variant="body2"
                      color="initial"
                      gutterBottom
                    >
                      {t('address.1')}
                    </AddressIconTextTypo>
                  </AddIconTextBox>
                  <AddIconTextBox>
                    <AddressIconTextTypo>
                      {t('addressIconText.0.text')}
                    </AddressIconTextTypo>
                    <AddressIconTextTypo>
                      {t('addressIconText.1.text')}
                    </AddressIconTextTypo>
                    <AddressIconTextTypo>
                      {t('addressIconText.2.text')}
                    </AddressIconTextTypo>
                  </AddIconTextBox>
                </ListMainBox>
              </Grid>
            </Grid>
          </FooterMainBox>
          <CopywriteBox>
            <CopyWriteTextTypo
              variant="body2"
              color="initial"
              gutterBottom
            >
             {t('copywriteText.0')}
            </CopyWriteTextTypo>
            <CopyWriteTextTypo
                 variant="body2"
                 color="initial"
                 gutterBottom
            >
              {t('copywriteText.1')}
            </CopyWriteTextTypo>
            <CopyWriteTextTypo
                 variant="body2"
                 color="initial"
                 gutterBottom
            >
              {t('copywriteText.2')}
            </CopyWriteTextTypo>
            {/* Add more CopyWriteTextTypo components for copywriteText */}
          </CopywriteBox>
        </Container>
      </MainBox>
    </>
  );
};

export default Footer;
