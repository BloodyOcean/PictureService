package controllers

import (
	"net/http"
	"picture-service/helper"
	"picture-service/models"
	"picture-service/services"

	"github.com/gin-gonic/gin"
)

func GetSimilarPosts() gin.HandlerFunc {
	return func(c *gin.Context) {

		arr := services.Mgr.GetPublication()
		var filtered_arr []models.Publication
		name := []rune(c.Param("name"))
		// var res []int

		for _, s := range arr {
			// res = append(res, helper.Levenshtein(name, []rune(s.Title)))
			if helper.Levenshtein(name, []rune(s.Title)) <= 3 {
				filtered_arr = append(filtered_arr, s)
			}
		}

		c.JSON(
			http.StatusOK,
			filtered_arr)
	}
}
