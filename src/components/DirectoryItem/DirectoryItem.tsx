import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()

  const handleToNavigate = () => {
    navigate(route)
  }

  return (
    <DirectoryItemContainer onClick={handleToNavigate}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
      </Body>
    </DirectoryItemContainer>
  )
}

export default DirectoryItem
