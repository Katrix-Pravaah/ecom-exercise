import classNames from 'classnames';
import styles from './horizontal-card.module.scss';
import commonStyles from '@styles/common-styles.module.scss';
import HeroImage04Jpg from '../../assets/img/[1024_640]_heroImage04.jpg';

export interface HorizontalCardProps {
    className?: string;
}

export const HorizontalCard = ({ className }: HorizontalCardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={HeroImage04Jpg} />
            <h1 className={styles.header1}>
                Green Leaf Branch - Pack of 12
                <h1 className={styles.header4}>
                    $85
                </h1>
            </h1>
        </div>
    );
};
