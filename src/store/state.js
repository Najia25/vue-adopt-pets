// @ is a shortcut for src directory, used instead of ../../
import cats from '../data/cats'
import dogs from '../data/dogs'

export default {
  cats,
  dogs,
  // without spread operator pets would be [[cats][dogs]]
  pets: [...cats, ...dogs]
}
