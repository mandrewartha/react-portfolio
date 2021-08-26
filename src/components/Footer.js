import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./style/Footer.css"


const Icons = () => {
    return (
        <div className="footer">
            <a href="https://github.com/mandrewartha" target="_blank"><GitHubIcon color="primary" className="icon" fontSize="large"/></a>
            <a href="https://www.linkedin.com/in/meghan-andrewartha-2021/" target="_blank"><LinkedInIcon color="primary" fontSize="large" className="icon"/></a>
      </div>
    )
}

export default Icons