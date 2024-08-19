Folder's structure

custom-auth-handler/
│
├── src/
│   ├── controllers/
│   │   └── protectedController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── services/
│   │   └── azureAuthService.js
│   ├── utils/
│   │   └── jwtUtil.js
│   └── app.js
└── index.js

Module Responsibilities
index.js: Application entry point. Initializes the server.
app.js: Configures and assembles middleware and routes.
protectedController.js: Controller that manages endpoint logic.
authMiddleware.js: Middleware responsible for validating the token.
azureAuthService.js: Service responsible for interacting with Azure to validate the token.
jwtUtil.js: Utility for operations with JWT.
