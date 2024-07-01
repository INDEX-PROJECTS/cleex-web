import React from 'react'
import styles from './Kit.module.scss'
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import ProfileIcon from '@/shared/assets/icons/ProfileIcon.svg'

const Kit = () => {
  return (
    <div className={styles.Kit}>
      <h2>Кнопки</h2>
      <div className={styles.container}>
        <Button theme={ThemeButton.DEFAULT}>
          Default
        </Button>

        <Button theme={ThemeButton.CLEAR}>
          Clear
        </Button>

        <Button theme={ThemeButton.ICON}>
          <ProfileIcon />
        </Button>
      </div>

      <div className={styles.container}>

      </div>
      


    </div>
  )
}

export default Kit