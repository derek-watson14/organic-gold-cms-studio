import { Link } from 'part:@sanity/base/router'
import FolderIcon from 'part:@sanity/base/folder-icon'
import FileIcon from 'part:@sanity/base/file-icon'
import React from 'react'
import styles from './StructureMenuWidget.css'

function getIconComponent(item) {
  if (item.icon) return item.icon
  if (!item.schemaType) return FileIcon
  return item.schemaType.icon || FolderIcon
}

function StructureMenuWidget(props) {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h3 className={styles.title}>Edit pages & add shows</h3>
      </div>

      <div className={styles.content}>
        {props.structure.items
          .filter((item) => item.type !== 'divider')
          .map((item) => {
            const Icon = getIconComponent(item)
            return (
              <div key={item.id}>
                <Link className={styles.link} href={`/desk/${item.id}`}>
                  <div className={styles.iconWrapper}>
                    <Icon />
                  </div>
                  <div>{item.title}</div>
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default StructureMenuWidget