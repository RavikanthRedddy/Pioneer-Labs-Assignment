
import {AiFillHome} from 'react-icons/ai'
import { GoOrganization } from "react-icons/go"
import { IoCubeOutline } from "react-icons/io5"
import { RiArrowUpDownLine } from "react-icons/ri"
import { FaHistory } from "react-icons/fa"
import { IoWallet } from "react-icons/io5"
import { IoIosNotificationsOutline } from "react-icons/io"
import { IoSettingsOutline } from "react-icons/io5"
import { BiSupport } from "react-icons/bi"

import {
  NavigationLgContainer,
  NavOptions,
  NavLink,
  NavLinkContainer,
  NavText,
  ContactInfo,
  ContactHeading,
  ContactIcons,
  ContactNote,
  ContactImage,
  NavigationSmallContainer,
  NavBar,
} from './styledComponents'

const NavigationBar = () =>{
    
      return (
        <NavBar>
          <NavigationLgContainer>
            <NavOptions>
              <NavLink to="/">
                <NavLinkContainer
                  key="home"
                >
                  <AiFillHome
                    size={30}
                    color='#fcfcfc'
                  />
                  <NavText>Home</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/organization">
                <NavLinkContainer
                  key="organization"
                >
                  <GoOrganization
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >Organization</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/assets">
                <NavLinkContainer
                  key="assets"
                >
                  <IoCubeOutline
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >Assets</NavText>
                </NavLinkContainer>
              </NavLink>

              <NavLink to="/trade">
                <NavLinkContainer
                  key="trade"
                >
                  <RiArrowUpDownLine
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >Trade</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/history">
                <NavLinkContainer
                  key="history"
                >
                  <FaHistory
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >History</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/wallet">
                <NavLinkContainer
                  key="wallet"
                >
                  <IoWallet
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >Wallet</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/notifications">
                <NavLinkContainer
                  key="notifications"
                  
                   
                >
                  <IoIosNotificationsOutline
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >Notifications</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/support">
                <NavLinkContainer
                  key="support"
                  
                   
                >
                  <BiSupport
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >Support</NavText>
                </NavLinkContainer>
              </NavLink>
              <NavLink to="/settings">
                <NavLinkContainer
                  key="settings"
                
           
                >
                  <IoSettingsOutline
                    size={30}
                    color= '#fcfcfc'
                  />
                  <NavText >Settings</NavText>
                </NavLinkContainer>
              </NavLink>
            </NavOptions>
            <ContactInfo>
              <ContactHeading >CONTACT US</ContactHeading>
              <ContactIcons>
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <ContactImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIcons>
              <ContactNote >
                Enjoy! Now to see your channels and recommendations!
              </ContactNote>
            </ContactInfo>
          </NavigationLgContainer>
          <NavigationSmallContainer >
            <NavLink to="/">
              <AiFillHome
                size={30}
                 
                
              />
            </NavLink>
            <NavLink to="/trending">
              <GoOrganization
                size={30}
                 
                color= '#fcfcfc'
              />
            </NavLink>
            <NavLink to="/gaming">
              <IoCubeOutline
                size={30}
                 
                color= '#fcfcfc'
              />
            </NavLink>
            <NavLink to="/saved-videos">
              <RiArrowUpDownLine
                size={30}
                color= '#fcfcfc'
              />
            </NavLink>
          </NavigationSmallContainer>
        </NavBar>
      )

}
export default NavigationBar