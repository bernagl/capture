import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import { Calendario, Inicio, Login, Materia, Tarea, Perfil } from '../views'

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
  Materia: { screen: Materia }
  //   Horario: { screen: Horario },
  //   Calendario: { screen: Calendario },
  //   Perfil: { screen: Perfil }
})
