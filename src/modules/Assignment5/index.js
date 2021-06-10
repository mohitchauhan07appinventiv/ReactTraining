import React from "react";
import {
  Switch,
  Button,
  Drawer,
  Typography,
  TextField,
  Link,
  MobileStepper,
  // Table,
  // TableBody,
  // TableCell,
  // TableContainer,
  // TableHead,
  // TableRow,
  Tooltip,
} from "@material-ui/core";

// import CustomTable from "./table";
import useStyle from "./style";
import {
  CheckCircleRounded,
  PersonAdd,
  Fingerprint,
  FontDownloadSharp,
  AccountBox,
  MonetizationOn,
  //   BusinessCenter,
  PublishRounded,
  GetAppRounded,
  PlaylistAddRounded,
  ErrorRounded,
  CopyrightRounded,
  DescriptionRounded,
  QuestionAnswerRounded,
  CollectionsBookmarkRounded,
  FlightTakeoffRounded,
  // LanguageRounded,
  ShoppingCartRounded,
  // Directions,
  Language,
  Twitter,
  Reddit,
  Facebook,
  Telegram,
  GitHub,
  Search,
  Add,
  VpnLock,
  ChevronRightRounded,
  ChevronLeftRounded,
} from "@material-ui/icons/";

export default function Assignment5(props) {
  const classes = useStyle();

  return (
    //   ---------------------------------------------------- Main Wrapper Class Start
    <div className={classes.mainWrapper}>
      {/* --------------------------------------------------- Header Start */}
      <div className={classes.header}>
        {/* ------------------------------------------------- Custom Toggle Start*/}
        <Switch
          focusVisibleClassName={classes.focusVisible}
          disableRipple
          checkedIcon={<CheckCircleRounded />}
          checked={true}
          classes={{
            root: classes.root,
            switchBase: classes.switchBase,
            thumb: classes.thumb,
            track: classes.track,
            checked: classes.checked,
          }}
          {...props}
        />
        {/* ------------------------------------------------- Custom Toggle END*/}
        {/* ------------------------------------------------- Buttons Section */}
        <div className={classes.btnRow}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.signUpBtn}
            startIcon={<PersonAdd />}
          >
            {" "}
            {"sign up free"}{" "}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className={classes.logInBtn}
            startIcon={<Fingerprint />}
          >
            {" "}
            {"log in"}{" "}
          </Button>
        </div>
        {/* ------------------------------------------------- Buttons Section END*/}
      </div>
      {/* --------------------------------------------------- Header End */}

      {/* --------------------------------------------------- Custon Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div>
          <Tooltip
            className={classes.tooltip}
            title={"Profile"}
            placement="right"
          >
            <div>
              <AccountBox className={classes.drawerIcons} />
            </div>
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Download"}
            placement="right"
          >
            <GetAppRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Upload"}
            placement="right"
          >
            <PublishRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Dollar"}
            placement="right"
          >
            <MonetizationOn className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip className={classes.tooltip} title={"List"} placement="right">
            <PlaylistAddRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip className={classes.tooltip} title={"Font"} placement="right">
            <FontDownloadSharp className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Plane Mode"}
            placement="right"
          >
            <FlightTakeoffRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip className={classes.tooltip} title={"Chat"} placement="right">
            <QuestionAnswerRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Important"}
            placement="right"
          >
            <CollectionsBookmarkRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Files"}
            placement="right"
          >
            <DescriptionRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Danger"}
            placement="right"
          >
            <ErrorRounded className={classes.drawerIcons} />
          </Tooltip>
          <Tooltip
            className={classes.tooltip}
            title={"Copyright"}
            placement="right"
          >
            <CopyrightRounded className={classes.drawerIcons} />
          </Tooltip>
        </div>
      </Drawer>
      {/* --------------------------------------------------- Custon Drawer END*/}

      {/* --------------------------------------------------- ContentSection */}
      <div className={classes.contentSection}>
        <div className={classes.bannerSection}>
          <div className={classes.buyAndSellContainer}>
            <div className={classes.buyRow}>
              <Button className={classes.buyBtn} variant="contained">
                <ShoppingCartRounded />
                {"Buy"}
              </Button>
              <Button className={classes.sellBtn} variant="outlined">
                <ShoppingCartRounded />
                {"sell"}
              </Button>
            </div>
            <div className={classes.buyRow}>
              <TextField
                className={classes.amountInput}
                id="outlined-basic"
                variant="outlined"
                label="Amount"
              />
              <TextField
                className={classes.amountInput}
                id="outlined-select-currency-native"
                select
                //   label="Native select"
                value={"currency"}
                onChange={"handleChange"}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option value={"inr"}>{"INR"}</option>
                <option value={"usd"}>{"USD"}</option>
                <option value={"bit"}>{"BTC"}</option>
                <option value={"cad"}>{"CAD"}</option>
                <option value={"yan"}>{"YAN"}</option>
              </TextField>
            </div>
            <div className={classes.buyRow}>
              <TextField
                className={classes.amountInput}
                id="outlined-select-currency"
                select
                value={"country"}
                onChange={"handleChange"}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option value={"india"}>&#127470;&#127475; India</option>
                <option value={"uae"}>&#x1F1E6;&#x1F1EA; UAE</option>
                <option value={"USA"}>&#127482;&#127480; United States</option>
                <option value={"canada"}>&#127464;&#127462; Canada</option>
                <option value={"turkey"}>&#127481;&#127479; Turkey</option>
              </TextField>
              <TextField
                className={classes.amountInput}
                id="outlined-select-bank"
                select
                value={"bank"}
                onChange={"handleChange"}
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option>&#127760;{" All online offer"}</option>
              </TextField>
            </div>
            <div className={classes.buyRowSearch}>
              <Button className={classes.searchBtn} variant="contained">
                <Search /> Search
              </Button>
            </div>
          </div>
          <div className={classes.contentCard}>
            <Typography className={classes.contentText} varient="paragraph">
              {"Buy Monero."}
            </Typography>
            <Typography className={classes.contentText} varient="paragraph">
              {"Sell Monero."}
            </Typography>
            <Typography className={classes.contentText} varient="paragraph">
              {"Cash or online"}
            </Typography>
            <Typography className={classes.contentText} varient="paragraph">
              {"Anywhere."}
            </Typography>
            <Button
              variant="contained"
              className={classes.contentBtn}
              startIcon={<PersonAdd />}
            >
              {" "}
              {"sign up free"}
            </Button>
          </div>
        </div>
        <Typography varient={"paragraph"} className={classes.buyMoneroTitle}>
          {"Buy Monero online in India"}
        </Typography>

      

        <div className={classes.TextContainer}>
          <div className={classes.paraPostAd}>
            <Typography variant={"h6"}>
              {"You can be the first one to"}
            </Typography>
            &nbsp;&nbsp;
            <Button
              variant="outlined"
              startIcon={<Add />}
              className={classes.AdBtn}
            >
              {"POST AN AD"}
            </Button>
            &nbsp;&nbsp;
            <Typography variant="h6">
              {"in the following categories:"}
            </Typography>
          </div>
          <div className={classes.BuyMonero}>
            <Add />
            <Link underline={"always"} color={"inherit"} href={"#"}>
              <Typography className={classes.moneroText} variant={"subtitle1"}>
                {"Buy Monero with cash in India"}
              </Typography>
            </Link>
          </div>

          <div className={classes.showingAd}>
            <VpnLock className={classes.vpnLogo} />
            <Typography className={classes.showingAdText} variant={"subtitle1"}>
              {" Showing advertisements in  India"}
            </Typography>
            <Button fontSize={"large"} color={"primary"}>
              {"CHANGE"}
            </Button>
          </div>
          <div className={classes.hl}></div>
          <div className={classes.mainTextArea}>
            <Typography className={classes.mainTextTitle}>
              {"Protect your right to privacy - buy Monero."}
            </Typography>
            <Typography className={classes.mainTextPara}>
              {
                "If you are concerned about the invasion of privacy - the best cryptocurrency to invest in is XMR. Monero is an untraceable coin developed with privacy by design in mind."
              }
            </Typography>
            <Typography className={classes.mainTextPara}>
              {" "}
              {
                "Where to buy Monero? LocalMonero is the biggest, most trusted and well-established P2P Monero exchange in the XMR community. We have no KYC checks - you can simply buy Monero anonymously without ID verification with PayPal, credit card, gift card, cash by mail or convert bitcoin to Monero - our platform supports any payment method."
              }
            </Typography>
            <Typography className={classes.mainTextTitle}>
              {
                "Sell Monero to people worldwide or locally - support the community and make money with cryptocurrency."
              }
            </Typography>
            <Typography className={classes.mainTextPara}>
              {
                "LocalMonero is the best place to sell XMR - whether it's your mining rewards, Monero price arbitrage, or you simply see the value in servicing the community. The escrow system and our secure Monero wallet provide you with a robust XMR trading experience - so you can convert XMR to USD, EUR, AUD, GBP or any other local currency with peace of mind."
              }
            </Typography>
          </div>
          <div className={classes.hl}></div>
        </div>
        <div className={classes.stepperContainer}>
          <div className={classes.stepperContent}>
            <Typography className={classes.stepperHeader} vairent="h3">
              <DescriptionRounded className={classes.stepperIcon} />
              {"Latest News"}
            </Typography>
            <Typography className={classes.stepperSubHeading} vairent="h4">
              {
                "Local Monero/AgoraDesk now allows you to import reputaion from Local Bitcoins and/or Paxful!"
              }
            </Typography>
            <Typography className={classes.subscript}>
              {"2020-12-06 12:00 UTC"}
            </Typography>
            <Typography varient="paragraph" className={classes.stepperPara}>
              {
                "If you have an account on LocalBitcoins or Paxful and you'd like to import the reputation you have worked for while trading on these platforms, you can now do so! To do it, simply open your settings page and navigate to the reputation import tab. Your LocalBitcoins/Paxful trades will be added to your total trade count and your other stats will be displayed on your user page."
              }
            </Typography>
          </div>
          <MobileStepper
            variant="dots"
            steps={6}
            position="static"
            // activeStep={activeStep}
            className={classes.stepperElement}
            nextButton={
              <Button
                size="small"
                // onClick={"handleNext"}
                // disabled={activeStep === 5}
              >
                Next <ChevronRightRounded />
                {/* {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )} */}
              </Button>
            }
            backButton={
              <Button
                size="small"
                // onClick={handleBack}
                // disabled={activeStep === 0}
              >
                {/* {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )} */}
                <ChevronLeftRounded />
                Back
              </Button>
            }
          />
        </div>
        {/* ------------------------------------------------- Footer Start */}
        {/* -------------------------------------------------------------------NaviGation Links */}
        <div className={classes.innerContainerLink}>
          <Typography className={classes.copyRight} vairent="p">
            &copy; 2021 Blue Sunday Limited
          </Typography>
          <div className={classes.linkSection}>
            <Typography className={classes.linksRow}>
              <Link href="#" underline={"always"}>
                About
              </Link>
              <Link href="#" underline={"always"}>
                Terms of service
              </Link>
              <Link href="#" underline={"always"}>
                Fees
              </Link>
              <Link href="#" underline={"always"}>
                Contact us
              </Link>
              <Link href="#" underline={"always"}>
                Law Enforcement Inquiries
              </Link>
            </Typography>

            <Typography className={classes.linksRow}>
              <Link href="#" underline={"always"}>
                Security bounty
              </Link>
              <Link href="#" underline={"always"}>
                Affiliate
              </Link>
              <Link href="#" underline={"always"}>
                Statistics
              </Link>
              <Link href="#" underline={"always"}>
                API docs
              </Link>
            </Typography>

            <Typography className={classes.linksRow}>
              <Link href="#" underline={"always"}>
                Local Bitcoins Alternative
              </Link>
              <Link href="#" underline={"always"}>
                Monero News
              </Link>
              <Link href="#" underline={"always"}>
                Knowledge
              </Link>
              <Link href="#" underline={"always"}>
                Monero Block Explorer
              </Link>
            </Typography>

            <Typography className={classes.linksRow}>
              <Link href="#" underline={"always"}>
                Tor hidden service
              </Link>
              <Link href="#" underline={"always"}>
                I2P
              </Link>
              <Link href="#" underline={"always"}>
                B32 I2P
              </Link>
              <Link href="#" underline={"always"}>
                AgoraDesk
              </Link>
            </Typography>
          </div>
          <Button className={classes.languageBtn}>
            <Language className={classes.languageIcon} />
            {"Change Language"}
          </Button>
        </div>
        {/* -------------------------------------------------------------------NaviGation Links END */}

        {/* -------------------------------------------------------------------SOCIAL Buttons */}
        <div className={classes.socialLinks}>
          <Button>
            <Twitter className={classes.socialIcons} />
          </Button>
          <Button>
            <Reddit className={classes.socialIcons} />
          </Button>
          <Button>
            <Facebook className={classes.socialIcons} />
          </Button>
          <Button>
            <Telegram className={classes.socialIcons} />
          </Button>
          <Button>
            <GitHub className={classes.socialIcons} />
          </Button>
        </div>
        {/* -------------------------------------------------------------------SOCIAL Buttons END*/}
        {/* ------------------------------------------------- Footer END */}
      </div>
      {/* --------------------------------------------------- ContentSection END */}
    </div>
    //   ---------------------------------------------------- Main Wrapper Class End
  );
}
