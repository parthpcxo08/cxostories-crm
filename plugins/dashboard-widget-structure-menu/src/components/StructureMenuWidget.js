import { Link } from "part:@sanity/base/router";
import FolderIcon from "part:@sanity/base/folder-icon";
import FileIcon from "part:@sanity/base/file-icon";
import React from "react";
import PropTypes from "prop-types";
import styles from "./StructureMenuWidget.css";

function getIconComponent(item) {
  if (item.icon) return item.icon;
  if (!item.schemaType) return FileIcon;
  return item.schemaType.icon || FolderIcon;
}

function StructureMenuWidget(props) {
  return (
    <div >
      <div style={{ paddingLeft: 10, paddingRight: 10 }}>
        <div className={styles.header}>
          <h3 className={styles.title}>Collections</h3>
        </div>
      </div>

      <div className={styles.content}>
        {props.structure.items
          .filter((item) => item.type !== "divider")
          .map((item) => {
            const Icon = getIconComponent(item);
            return (
              <div key={item.id}>
                <Link className={styles.link} href={`/desk/${item.id}`}>
                  <div className={styles.iconWrapper}>
                    <Icon />
                  </div>
                  <div className={styles.widgetTitle}>{item.title}</div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}
StructureMenuWidget.propTypes = {
  structure: PropTypes.object,
};

export default StructureMenuWidget;
