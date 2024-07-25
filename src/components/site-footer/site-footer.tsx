import styles from './site-footer.module.scss';
import { ReactComponent as FacebookIcon } from '../../assets/svg/facebook.svg';
import { ReactComponent as TwitterxIcon } from '../../assets/svg/twitterx.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/svg/youtube.svg';
import { ReactComponent as MediumIcon } from '../../assets/svg/medium.svg';
import { ReactComponent as GithubIcon } from '../../assets/svg/github.svg';
import Classnames from 'classnames';

export interface FooterProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Footer = ({ className }: FooterProps) => {
    return (
        <div className={styles.div2}>
            <div className={styles.details}>
                <div>
                    Contact Jane Doe
                    <div className={styles.div1}>
                        <a href="/">
                            <TwitterxIcon className={styles.icon} />
                        </a>
                        <a href="/">
                            <FacebookIcon className={styles.icon} />
                        </a>
                        <a href="/">
                            <DiscordIcon className={Classnames(styles.icon, styles.discordIcon)} />
                        </a>
                        <a href="/">
                            <YoutubeIcon className={styles.icon} />
                        </a>
                        <a href="/">
                            <MediumIcon className={styles.icon} />
                        </a>
                        <a href="/">
                            <GithubIcon className={styles.icon} />
                        </a>
                    </div>
                </div>
                <div>
                    Mail: info@mysite.com
                    <br />
                    Tel: 123-456-7890
                    <br />
                    500 Terry Francine Street,
                    <br />
                    San Francisco, CA 94158
                </div>
            </div>
        </div>
    );
};
