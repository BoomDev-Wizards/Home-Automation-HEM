import styles from "./Navigation.module.scss";
import classNames from "classnames";
import { useState } from "react";
import { Drawer, List, IconButton, Menu, ListItem, MenuItem, ListItemIcon, Badge, ListItemText } from "@mui/material";
import User from "../user/User";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Navigation({rooms}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classNames(styles["navigation-container"])}>
            <Drawer
                anchor="left"
                variant="permanent"
            >
                <div className={classNames(styles["user-container"])}>
                    <User name="John Doe" avatar="/images/avatar.png" size={55} ></User>
                    <IconButton
                        aria-label="more"
                        id="long-button"
                        aria-controls={open ? 'long-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-haspopup="true"
                        onClick={handleClick}
                    >
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                            style: {
                                width: '20ch',
                            },
                        }}
                    >
                        <MenuItem>
                            Logout
                        </MenuItem>
                    </Menu>
                </div>

                <List>
                    {[{name:'Apartment'},...rooms].map((text, key) => (
                        <ListItem button key={key} className={text.name == 'Apartment' || text == "House" ? classNames(styles["header-item"]) : ''}>
                            <ListItemIcon>
                                {text.name == 'Apartment' || text == 'House' ? <HomeOutlinedIcon /> : <BedOutlinedIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text.name} />
                            <Badge badgeContent={0} color={text.name == 'Apartment' || text == 'House' ? "secondary" : "error"} className={classNames(styles["badge"])} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </div>
    )
}
