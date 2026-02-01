State Management
Definition
State management is the process of storing, updating, and sharing data across a React application and keeping it in sync with the backend.

State Types
Local State
Description
Local state belongs to a single component and is used for small, temporary data.

Used For
input fields

counters

toggles

Example
javascript
const [count, setCount] = useState(0);
Global State
Description
Global state is shared across multiple components in the application.

Used For
logged_in_user

theme

cart_items

Tools
Context_API

Redux_Toolkit

Example
javascript
const AuthContext = createContext();
Server State
Description
Server state is data fetched from backend APIs or databases.

Used For
users

products

orders

Handled By
useEffect

axios

fetch

Example
javascript
useEffect(() => {
  fetchUsers();
}, []);
Authentication State
Description
Authentication state controls access to protected parts of the app.

Includes
login

logout

token_handling

Example
javascript
const [isAuthenticated, setIsAuthenticated] = useState(false);
UI State
Description
UI state controls how the interface looks and behaves.

Examples
loading_spinner

error_message

modal_visibility

Example
javascript
const [loading, setLoading] = useState(false);
Frontend Backend Communication
Method
REST_API

Frontend Tools
axios

fetch

Backend Tools
nodejs

express

Example
Request
javascript
axios.post("/api/login", userData);
Response
success_data

error_message

jwt_token

Data Flow
Description
Full stack data flow from UI to database and back.

Steps
user_action

react_component

state_update

api_request

backend_logic

database

api_response

state_update

ui_rerender

Example Workflow
Login Flow
Steps
user_enters_credentials

data_stored_in_local_state

api_call_to_backend

backend_validates_user

token_generated

global_auth_state_updated

dashboard_rendered

Common Mistakes
using_global_state_everywhere

prop_drilling

missing_loading_state

poor_error_handling

mixing_ui_and_server_logic