package models

import (
	"mime/multipart"

	"gorm.io/gorm"
)

type File struct {
	File multipart.File `json:"file,omitempty" validate:"required"`
}

type Url struct {
	Url string `json:"url,omitempty" validate:"required"`
}

type Publication struct {
	gorm.Model
	Url         string
	Title       string
	Description string
}
