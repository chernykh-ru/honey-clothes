import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { IDirectoryWithRoute } from '../../types/types'
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from './DirectoryItem.styles'

interface ICategoryItemProps {
  directory: IDirectoryWithRoute
}

const DirectoryItem: FC<ICategoryItemProps> = ({ directory }) => {
  const { imageUrl, title, route } = directory

  return (
    <DirectoryItemContainer to={route}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
