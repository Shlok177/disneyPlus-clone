import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  InputBase,
  CssBaseline,
  Link,
} from "@material-ui/core";
import useStyles from "./Styles";
import MenuIcon from "@material-ui/icons/Menu";
import { useMediaQuery } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import logo from './logo.svg'

function Header() {
  const classes = useStyles();
  const Desktop = useMediaQuery("(min-width: 1122px)");
  const Mobile = useMediaQuery("(max-width: 657px)");
  const Ipad = useMediaQuery("(max-width: 1121px) and (min-width: 658px)");


  return (
    <div>
      <CssBaseline />
      <AppBar className={classes.AppBar}>
        <Toolbar>
          {Desktop && (
            <div className={classes.DIV1}>
              <div className={classes.Menu} >
              <IconButton>
                <MenuIcon className={classes.MenuIcon} />
              </IconButton>
            </div>
              <img
                src={logo}
                alt="Disney Plus"
                className={classes.imgLogo}
              />
            </div>
          )}
          {Ipad && (
            <div className={classes.DIV1}>
            <div className={classes.Menu} >
              <IconButton>
                <MenuIcon className={classes.MenuIcon} />
              </IconButton>
            </div>
            <img
              src={logo}
              alt="Disney Plus"
              className={classes.imgLogo}
            />
          </div>
          )}
          {Mobile && (
            <div className={classes.DIV1}>
              <div className={classes.Menu} >
            </div>
              <img
                src={logo}
                alt="Disney Plus"
                className={classes.imgLogo2}
              />
            </div>
          )}
          <div className={classes.DIV3}>
            {Desktop && (
              <div className={classes.DIV3} >
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                  />
                </div>
                <div className={classes.Buttons}>
                  <Button
                    variant="contained"
                    spacing={2}
                    className={classes.subBTN}
                  >
                    Subscribe
                  </Button>
                  <Button
                    variant="contained"
                    spacing={2}
                    className={classes.logBTN}
                  >
                    Login
                  </Button>
                </div>
              </div>
            )}
            {Ipad && (
            <div>
            <div className={classes.Buttons3}>
              <Button
                variant="contained"
                spacing={2}
                className={classes.subBTN3}
              >
                Subscribe
              </Button>
              <Button
                variant="contained"
                spacing={2}
                className={classes.logBTN3}
              >
                Login
              </Button>
            </div>
          </div>
          )}
            {Mobile && (
              <div>
                <div className={classes.Buttons2}>
                  <Button
                    variant="contained"
                    spacing={2}
                    className={classes.subBTN2}
                  >
                    Subscribe
                  </Button>
                  <Button
                    variant="outlined"
                    spacing={2}
                    className={classes.logBTN2}
                  >
                    Login
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
