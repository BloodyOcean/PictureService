package services

import (
	"picture-service/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type DbManager interface {
	AddPublication(item *models.Publication)
}

type manager struct {
	db *gorm.DB
}

var Mgr manager

func init() {
	db, err := gorm.Open(sqlite.Open("imagesdb.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schemas
	_ = db.AutoMigrate(&models.Publication{})

	Mgr = manager{db: db}
}

func (mgr *manager) AddPublication(item *models.Publication) {
	mgr.db.Create(item)
}
