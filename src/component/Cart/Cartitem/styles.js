import { makeStyles, makestyles } from '@material-ui/core/styles'

export default makeStyles() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardAction: {
    justifyContent: 'space-between',
  },
  buttons: {
    display:'flex',
    alignItems: 'center',
  },
});