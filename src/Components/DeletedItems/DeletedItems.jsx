import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashRestore } from "@fortawesome/free-solid-svg-icons/faTrashRestore"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"
import { useTranslation } from "react-i18next"
import NavBar from "../NavBar/NavBar"

export default function DeletedItems(props) {
  const { t } = useTranslation()
  const deletedItems = [{
    name: "name",
  }]

  const handleRestore = (index) => {
    // props.handleRestore(index)
  }

  const handleRemove = (index) => {
    // props.handlePermanentRemove(index)
  }

  //this is what must have this component
  // t={t}
  // handleRestore={handleRestore}
  // deletedItems={deletedItems}
  // handlePermanentRemove={handlePermanentRemove}

  return (
    <div className="wrapper">
      <NavBar
        t={t}
      />
      <div className="deleted-items">
        {
          // props.deletedItems.length === 0
          deletedItems.length === 0
            ? <div className="deleted-items__message">{t("deleted_items.no_deleted_items")}</div>
            :
            <>
              <div className="deleted-items__title">
                {t("deleted_items.here_you_can_restore")}
              </div>
              {
                // props.deletedItems.map((item, index) =>
                deletedItems.map((item, index) =>
                  <div className="deleted-items__item" key={index}>
                    <div>{item.name}</div>
                    <div className="deleted-items__controls">
                      <div className="button button__red" onClick={() => handleRemove(index)}>
                        <FontAwesomeIcon icon={faTimes}/>
                      </div>
                      <div className="button button__green" onClick={() => handleRestore(index)}>
                        <FontAwesomeIcon icon={faTrashRestore}/>
                      </div>
                    </div>
                  </div>
                )
              }
            </>
        }
      </div>
    </div>
  )
}