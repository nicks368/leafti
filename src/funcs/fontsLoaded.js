
import { useFonts, Lexend_300Light } from '@expo-google-fonts/lexend';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Jura_400Regular } from '@expo-google-fonts/jura';

const [ fontsLoaded]  = useFonts({
    Jura_400Regular,
    Lexend_300Light,
    Roboto_400Regular,
    'agency_fb':require('../../../assets/fonts/agency_fb.ttf')
})

export default fontsLoaded;