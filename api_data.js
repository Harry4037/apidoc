define({ "api": [
  {
    "description": "<p>This api can be use to logout user parameter as their arguments.Please check the curl example for better explanation</p>",
    "type": "get",
    "url": "/api/logout",
    "title": "Logout User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>Users unique access-token.</p>"
          }
        ]
      }
    },
    "name": "logoutUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n\n{\n      \"status\": true,\n      \"message\": \"User successfully logged out.\",\n      \"data\": []\n      }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/AuthController.php",
    "groupTitle": "User"
  },
  {
    "description": "<p>This api can be use to send OTP parameter as their arguments.Please check the curl example for better explanation</p>",
    "type": "post",
    "url": "/api/send-otp",
    "title": "Send OTP",
    "name": "send_otp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "mobile_number",
            "optional": false,
            "field": "string",
            "description": "<p>Users mobile number.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>for the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>blank array.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": true,\n      \"message\": \"OTP send successfully.\",\n      \"data\": []\n      }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/AuthController.php",
    "groupTitle": "User"
  },
  {
    "description": "<p>This api can be use to verify OTP parameter as their arguments.Please check the curl example for better explanation</p>",
    "type": "post",
    "url": "/api/verify-otp",
    "title": "verify OTP",
    "name": "verify_otp",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>Users mobile number.</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "otp",
            "description": "<p>OTP.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "success",
            "description": "<p>true</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>OTP verified successfully.</p>"
          },
          {
            "group": "Success 200",
            "type": "JSON",
            "optional": false,
            "field": "data",
            "description": "<p>user detail.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n      \"status\": true,\n      \"message\": \"OTP verified successfully.\",\n      \"data\": {\n      \"id\": 3,\n      \"salutation_id\": 0,\n      \"user_name\": null,\n      \"password\": \"$2y$10$9Q4IrH1lk21oNaeZ5R7UtOxQv7mn9Rodg6HNyrgn5lS.XSeFNQdUq\",\n      \"first_name\": null,\n      \"mid_name\": null,\n      \"last_name\": null,\n      \"gender\": null,\n      \"email_id\": null,\n      \"alternate_email_id\": null,\n      \"user_type_id\": 0,\n      \"designation_id\": 0,\n      \"department_id\": 0,\n      \"city_id\": 0,\n      \"language_id\": 0,\n      \"screen_name\": null,\n      \"date_of_joining\": null,\n      \"authority_id\": \"0\",\n      \"date_of_birth\": null,\n      \"is_user_loked\": 0,\n      \"profile_pic_path\": null,\n      \"mobile_number\": \"8077575835\",\n      \"other_contact_number\": null,\n      \"address1\": null,\n      \"address2\": null,\n      \"address3\": null,\n      \"pincode\": null,\n      \"secuity_question\": null,\n      \"secuity_questio_answer\": null,\n      \"ref_time_zone_id\": null,\n      \"login_expiry_date\": null,\n      \"other_info\": null,\n      \"user_id_RA\": null,\n      \"is_active\": 1,\n      \"domain_id\": 0,\n      \"remember_token\": null,\n      \"otp\": \"9999\",\n      \"createdBy\": \"0\",\n      \"updatedBy\": \"0\",\n      \"created_at\": \"2018-10-12 07:02:45\",\n      \"updated_at\": \"2018-10-12 07:02:45\",\n      \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM5YjczODZiM2FlZjQxMmRmZWFiMzgwZjliZTE5YjgwNWZhZTJkYTA0OTk1ZDMxYjEzMDBmYzkzYmQ2NGFmNGU3MGNhODQ5OGZjMDI1MzQwIn0.eyJhdWQiOiIxIiwianRpIjoiMzliNzM4NmIzYWVmNDEyZGZlYWIzODBmOWJlMTliODA1ZmFlMmRhMDQ5OTVkMzFiMTMwMGZjOTNiZDY0YWY0ZTcwY2E4NDk4ZmMwMjUzNDAiLCJpYXQiOjE1MzkzMjg2OTcsIm5iZiI6MTUzOTMyODY5NywiZXhwIjoxNTcwODY0Njk3LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.TXVDzonROY7nW3YLIaPnAFywYjiNskNrpwcM5pprcL99lrKwtplNuiq0S4Ad2Pjt84YTI9hbDhm24hG_ROJx8IZqRsCWtY9YUk4719Hf-tW3P6FIs4eUxWQKGTPncB3h95VsREuIqFe1FuwWcoCVlpwreGttiJk-8ciuZTec8alpowZ-m4EObtaOt4uCI3vntZnc4J_fUyUTjlRAsiebvTpPPcDL-NvmRaJ_luu81Mm3iD0L1ieoPLG2oy79cNtgzsHwYoA9ebtzCPR-zoRRzbI5jL7M1JdtHdsaD1xp2RSXN27BG9X3Isy_dq0IGLGKb698UdqccYlSupDZ1pnSzsUBkOm847wEIPBOtonkNNGFH7OKONpUKWaIkYJ38AUkR4hRQK92x_5TrNaz1eSn6iuqQG-2J_c8d9wRh6QRST_bhNseMIotSGIKX6ZFqx7OaqqUrK_KPlYqULzXPeXEWEbGoSs6-knQ9cwdXFAXd1vm4f6VzVGZUwwP8z33olrSN-MQklNGs9rw_kPnXhxMMPX4Pn5Ii7UdmNgjiRZNzhu6DpsxHuk9oKrASox4O1BhpiHRBfToyqfA3XJW2b0MQdfE4CCmx61wnmittVeO6hAGFmxn0_xPYLfKrm2jny6WVUGh1A7lxUJNJSRVotA3bd20yJTabcn2SZ0XiI25Z6E\",\n      \"token_type\": \"Bearer\",\n      \"expires_at\": \"2018-10-19 07:18:18\"\n      }\n      }",
          "type": "json"
        }
      ]
    },
    "version": "1.0.0",
    "filename": "app/Http/Controllers/Api/AuthController.php",
    "groupTitle": "User"
  }
] });
