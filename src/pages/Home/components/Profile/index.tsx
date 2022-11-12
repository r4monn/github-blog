import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/Header/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfilePicture src="https://github.com/r4monn.png" />

      <ProfileDetails>
        <header>
          <h1>Ramon Dias</h1>

          <ExternalLink text="GITHUB" href="#" />
        </header>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
        </p>
        <ul>
          <li>
            <FontAwesomeIcon icon={faGithub} />
            r4monn
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            Freelancer
          </li>
          <li>
            <FontAwesomeIcon icon={faUserGroup} />
            372 seguidores
          </li>
        </ul>
      </ProfileDetails>
    </ProfileContainer>
  )
}