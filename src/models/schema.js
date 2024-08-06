export const schema = {
    "models": {},
    "enums": {
        "ModelAttributeTypes": {
            "name": "ModelAttributeTypes",
            "values": [
                "binary",
                "binarySet",
                "bool",
                "list",
                "map",
                "number",
                "numberSet",
                "string",
                "stringSet",
                "_null"
            ]
        },
        "ModelSortDirection": {
            "name": "ModelSortDirection",
            "values": [
                "ASC",
                "DESC"
            ]
        }
    },
    "nonModels": {
        "Blog": {
            "name": "Blog",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "posts": {
                    "name": "posts",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelPostConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "Post": {
            "name": "Post",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "blog": {
                    "name": "blog",
                    "isArray": false,
                    "type": {
                        "nonModel": "Blog"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "comments": {
                    "name": "comments",
                    "isArray": false,
                    "type": {
                        "nonModel": "ModelCommentConnection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "blogPostsId": {
                    "name": "blogPostsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Comment": {
            "name": "Comment",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "post": {
                    "name": "post",
                    "isArray": false,
                    "type": {
                        "nonModel": "Post"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "_version": {
                    "name": "_version",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "_deleted": {
                    "name": "_deleted",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "_lastChangedAt": {
                    "name": "_lastChangedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": true,
                    "attributes": []
                },
                "postCommentsId": {
                    "name": "postCommentsId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelBlogConnection": {
            "name": "ModelBlogConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Blog"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelPostConnection": {
            "name": "ModelPostConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Post"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "ModelCommentConnection": {
            "name": "ModelCommentConnection",
            "fields": {
                "items": {
                    "name": "items",
                    "isArray": true,
                    "type": {
                        "nonModel": "Comment"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "nextToken": {
                    "name": "nextToken",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "startedAt": {
                    "name": "startedAt",
                    "isArray": false,
                    "type": "AWSTimestamp",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.4.4",
    "version": "6cb1d544f097a3706d9389b80c8c3394"
};