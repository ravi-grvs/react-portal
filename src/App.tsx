import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,

} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import { HubPage } from "./pages/HubPage";
import theme from "./baseStyles/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement:<ErrorPage/>
  },
  {
    path: "/hub/:hubId",
    element: <HubPage/>,
    errorElement:<ErrorPage/>
  },
])

export const App = () => (
  <ChakraProvider theme={theme}>
     <RouterProvider router={router} />
  </ChakraProvider>
)
