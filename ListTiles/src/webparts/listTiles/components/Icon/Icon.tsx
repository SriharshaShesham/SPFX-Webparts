import * as React from "react";
import * as FontAwesomeIcons from "react-icons/fa";
import * as AntIcons from "react-icons/ai";
import * as BootstrapIcons from "react-icons/bs";
import * as BoxIcons from "react-icons/bi";
import * as DevIcons from "react-icons/di";
import * as WeatherIcons from "react-icons/wi"
import * as FeatherIcons from "react-icons/fi";
import * as FlatIcons from "react-icons/fc";
import * as GameIcons from "react-icons/gi";
import * as GithubIcons from "react-icons/go";
import * as GrommetIcons from "react-icons/gr";
import * as HeroIcons from "react-icons/hi";
import * as IconMoonIocns from "react-icons/im";
import * as Icon4Icons from "react-icons/io";
import * as Icon5Icons from "react-icons/io5";
import * as MaterialDesignIcons from "react-icons/md";
import * as RemixIcons from "react-icons/ri";
import * as SimpleIcons from "react-icons/si";
import * as TypeIcons from "react-icons/ti";
import * as VisualCodeIcons from "react-icons/vsc";
import * as CssGGIcons from "react-icons/cg";
import styles from './Icon.module.scss';


const Icon = props => {
    const { iconName,displayType} = props;
    let key=iconName.substring(0,2);
    if(iconName.indexOf("IoIos")==0)
        key="IoIos";

    let styleToApply;
    switch(displayType)
    {
        default:{
            styleToApply= styles.iconTiles;
        }break;

        case '3':{
            styleToApply=styles.iconQuicklinks;
        }break;

    }
    let icon;
    //console.log(key);
    switch (key) {
           
        case "Fa":{
            icon = React.createElement(FontAwesomeIcons[iconName]);
        }break;
        case "Ai":{
            icon = React.createElement(AntIcons[iconName]);
        }break;
        case "Bs":{
            icon = React.createElement(BootstrapIcons[iconName]);
        }break;
        case "Bi":{
            icon = React.createElement(BoxIcons[iconName]);
        }break;
        case "Di":{
            icon = React.createElement(DevIcons[iconName]);
        }break;
        case "Wi":{
            icon = React.createElement(WeatherIcons[iconName]);
        }break;
        case "Fi":{
            icon = React.createElement(FeatherIcons[iconName]);
        }break;
        case "Fc":{
            icon = React.createElement(FlatIcons[iconName]);
        }break;
        case "Gi":{
            icon = React.createElement(GameIcons[iconName]);
        }break;
        case "Go":{
            icon = React.createElement(GithubIcons[iconName]);
        }break;
        case "Gr":{
            icon = React.createElement(GrommetIcons[iconName]);
        }break;
        case "Hi":{
            icon = React.createElement(HeroIcons[iconName]);
        }break;
        case "Im":{
            icon = React.createElement(IconMoonIocns[iconName]);
        }break;
        case "IoIos":{
            icon = React.createElement(Icon4Icons[iconName]);
        }break;
        case "Io":{
            icon = React.createElement(Icon5Icons[iconName]);
        }break;
        case "Md":{
            icon = React.createElement(MaterialDesignIcons[iconName]);
        }break;
        case "Ri":{
            icon = React.createElement(RemixIcons[iconName]);
        }break;
        case "Si":{
            icon = React.createElement(SimpleIcons[iconName]);
        }break;
        case "Ti":{
            icon = React.createElement(TypeIcons[iconName]);
        }break;
        case "Vsc":{
            icon = React.createElement(VisualCodeIcons[iconName]);
        }break;
        case "Cg":{
            icon = React.createElement(CssGGIcons[iconName]);
        }break;


      default:
        break;
    }
    
    return <div className={styleToApply}>{icon}</div>;
  };

export default Icon;