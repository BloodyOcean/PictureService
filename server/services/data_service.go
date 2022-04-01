package services

import (
	"picture-service/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

func InitDb() *gorm.DB {
	db, err := gorm.Open(sqlite.Open("imagesdb.db"), &gorm.Config{})

	if err != nil {
		panic("failed to connect database")
	}

	// Migrate the schemas
	_ = db.AutoMigrate(&models.Publication{})

	return db
}

func AddPublication(db *gorm.DB, item models.Publication) {
	db.Create(item)
}
