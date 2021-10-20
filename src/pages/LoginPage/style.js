import styled from "styled-components";
import Grid from '@material-ui/core/Grid';
import theme from "../../utils/theme";

export const StyledGrid = styled(Grid)`
background-color: ${theme.backgroundDefault};
height: calc(100vh - 3px);
`