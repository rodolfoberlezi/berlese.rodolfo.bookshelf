import React from 'react'
import { useI18next } from 'gatsby-plugin-react-i18next'
import { Select, Center } from '@chakra-ui/react'
import { GrLanguage } from 'react-icons/gr'
import TranslatedLabel from './TranslatedLabel'

const LanguagesMenu = () => {
  const { languages, originalPath, changeLanguage } = useI18next()

  const onChangeLanguage = (lng) => {
    changeLanguage(lng, originalPath)
  }

  return (
    <Center direction="column">
      <Select
        minWidth={200}
        placeholder={<TranslatedLabel text={'LanguageCommand'}></TranslatedLabel>}
        icon={<GrLanguage />}
        onChange={(event) => onChangeLanguage(event.target.value)}
      >
        {languages.map((lng) => (
          <option key={lng} value={lng}>
            <TranslatedLabel text={lng}></TranslatedLabel>
          </option>
        ))}
      </Select>
    </Center>
  )
}

export default LanguagesMenu
