import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import {
  AgregarTarea,
  Calendario,
  FMateria,
  Inicio,
  Login,
  Materia,
  Tarea,
  Perfil
} from '../views'

export default StackNavigator({
  Aplicacion: {
    screen: TabNavigator({
      Inicio: { screen: Inicio },
      Tarea: { screen: Tarea },
      Calendario: { screen: Calendario },
      Perfil: { screen: Perfil }
    })
  },
  Login: { screen: Login },
  Materia: { screen: Materia },
  AgregarMateria: { screen: FMateria },
  AgregarTarea: { screen: AgregarTarea }
  //   Horario: { screen: Horario },
  //   Calendario: { screen: Calendario },
  //   Perfil: { screen: Perfil }
})
