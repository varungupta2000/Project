import Text, { FontType } from '@components/Text';
import { ReactNode, useEffect } from 'react';
import cx from 'classnames';

import Cross from "../../assets/icon/Cross.svg";

import styles from './styles.module.scss';

type ModalProps = {
    isModalOpen: boolean;
    closeModal: () => void;
    children: ReactNode;
    modalHeading?: string;
    className?: string;
    isAnimationTriggered?: boolean;
};

const Modal = (props: ModalProps) => {
    const { isModalOpen, closeModal, modalHeading, className, children, isAnimationTriggered } =
        props;

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isModalOpen]);

    return isModalOpen ? (
        <div className={styles.modalWrapper}>
            <div
                className={cx(
                    className,
                    styles.modalContainer,
                    isAnimationTriggered && styles.closeAnimation,
                )}
            >
                <div className={styles.modalHeading}>
                    {/* <Text font={[FontType.H5_BOLD, FontType.H3_BOLD]} tagType="h3">{modalHeading || ''}</Text> */}
                    <button onClick={closeModal} type="button">
                        <div className={styles.cross}>
                            <Cross width="16px" height="16px" alt="Cross" />
                        </div>
                    </button>
                </div>
                {children}
            </div>
        </div>
    ) : null;
};

export default Modal;
