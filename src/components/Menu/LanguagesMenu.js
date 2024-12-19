import React from 'react'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'
import { Center } from '@chakra-ui/react'
import { GrLanguage } from 'react-icons/gr'

const LanguagesMenu = () => {
  const { language, originalPath } = useI18next()

  return (
    <Center direction="column" gap={5} fontSize={14}>
      {/* <Select
        minWidth={200}
        placeholder={<TranslatedLabel text={'language.command'} />}
        icon={<GrLanguage />}
        onChange={(event) => {
          event.preventDefault()
          console.log(event.target.value)
          onChangeLanguage(event.target.value)
        }}
      >
        {languages.map((lng) => (
          <option key={lng} value={lng}>
            <TranslatedLabel text={lng}></TranslatedLabel>
          </option>
        ))}
      </Select> */}
      {language === 'pt' ? (
        <Link to={originalPath} language="en">
          Switch to English
        </Link>
      ) : (
        <Link to={originalPath} language="pt">
          Site Português
        </Link>
      )}
      <GrLanguage size={24} />
    </Center>
  )
}

export default LanguagesMenu
