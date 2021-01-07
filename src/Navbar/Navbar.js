import React, {Component} from "react";
import Logo from '../Logo/Logo';
import MobileUserMenu from './UserMenu/Mobile/MobileUserMenu';
import DesktopUserMenu from './UserMenu/Desktop/DesktopUserMenu';
import DesktopMenuToggler from './UserMenu/Desktop/DesktopMenuToggler';
import MobileMenuToggler from './UserMenu/Mobile/MobileMenuToggler';
import NotificationButton from './NotificationButton/NotificationButton';
import BurgerButton from './BurgerButton/BurgerButton';
import NavigationItems from './NavigationItems/NavigationItems';

class Navbar extends Component {
  state = {
    showDesktopUserMenu: false,
    showMobileMenu: false,
    showMobileUserMenu: false
  };

  desktopMenuTogglerHandler = () => {
    this.setState((prevState) => ({
      showDesktopUserMenu: !prevState.showDesktopUserMenu
    }));
  }
  mobileMenuTogglerHandler = () => {
    this.setState((prevState) => ({
      showMobileMenu: !prevState.showMobileMenu,
      showMobileUserMenu: false
    }));
  }
  mobileUserMenuTogglerHandler = () => {
    this.setState((prevState) => ({
      showMobileUserMenu: !prevState.showMobileUserMenu
    }));
  }

  render () {
    return (
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Logo />
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <NavigationItems />
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6">
                <NotificationButton />
                <div className="ml-3 relative">
                  <DesktopMenuToggler clicked={this.desktopMenuTogglerHandler}/>
                  {this.state.showDesktopUserMenu ?  <DesktopUserMenu /> : null}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <BurgerButton clicked={this.mobileMenuTogglerHandler}/>
            </div>
          </div>
        </div>
  
        <div className={this.state.showMobileMenu ? "md:hidden" : "hidden md:hidden "}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavigationItems />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <MobileMenuToggler clicked={this.mobileUserMenuTogglerHandler}/>
              <NotificationButton />
            </div>
            {this.state.showMobileMenu && this.state.showMobileUserMenu ? <MobileUserMenu /> : null}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
