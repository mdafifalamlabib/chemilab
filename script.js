// Array of chemicals with details

const chemicals = [
    { name: 'HCl', type: 'acid', color: 'colorless', state: 'liquid' },
    { name: 'NaOH', type: 'base', color: 'white', state: 'solid' },
    { name: 'H2SO4', type: 'acid', color: 'colorless', state: 'liquid' },
    { name: 'NaCl', type: 'salt', color: 'white', state: 'solid' },
    { name: 'H2O', type: 'water', color: 'colorless', state: 'liquid' },
    { name: 'CH3COOH', type: 'acid', color: 'colorless', state: 'liquid' },
    { name: 'NH3', type: 'base', color: 'colorless', state: 'gas' },
    { name: 'C2H5OH', type: 'alcohol', color: 'colorless', state: 'liquid' },
    { name: 'Na2CO3', type: 'salt', color: 'white', state: 'solid' },
    { name: 'CaCO3', type: 'salt', color: 'white', state: 'solid' },
    { name: 'KOH', type: 'base', color: 'white', state: 'solid' },
    { name: 'CuSO4', type: 'salt', color: 'blue', state: 'solid' },
    { name: 'FeSO4', type: 'salt', color: 'green', state: 'solid' },
    { name: 'AgNO3', type: 'salt', color: 'white', state: 'solid' },
    { name: 'BaCl2', type: 'salt', color: 'white', state: 'solid' },
    { name: 'HNO3', type: 'acid', color: 'colorless', state: 'liquid' },
    { name: 'H3PO4', type: 'acid', color: 'colorless', state: 'liquid' },
    { name: 'Ca(OH)2', type: 'base', color: 'white', state: 'solid' },
    { name: 'MgSO4', type: 'salt', color: 'white', state: 'solid' },
    { name: 'KNO3', type: 'salt', color: 'white', state: 'solid' },
    { name: 'ZnSO4', type: 'salt', color: 'white', state: 'solid' },
    { name: 'Pb(NO3)2', type: 'salt', color: 'white', state: 'solid' },
    { name: 'H2O2', type: 'oxidizer', color: 'colorless', state: 'liquid' },
    { name: 'C6H12O6', type: 'sugar', color: 'white', state: 'solid' },
    { name: 'NaHCO3', type: 'base', color: 'white', state: 'solid' },
    { name: 'C6H6', type: 'aromatic', color: 'colorless', state: 'liquid' },
    { name: 'H2', type: 'gas', color: 'colorless', state: 'gas' },
    { name: 'O2', type: 'gas', color: 'colorless', state: 'gas' },
    { name: 'CO2', type: 'gas', color: 'colorless', state: 'gas' },
    { name: 'Cl2', type: 'gas', color: 'greenish-yellow', state: 'gas' },
    { name: 'Br2', type: 'halogen', color: 'reddish-brown', state: 'liquid' },
    { name: 'I2', type: 'halogen', color: 'purple', state: 'solid' },
    { name: 'CH4', type: 'alkane', color: 'colorless', state: 'gas' },
    { name: 'C2H2', type: 'alkyne', color: 'colorless', state: 'gas' },
    { name: 'C2H4', type: 'alkene', color: 'colorless', state: 'gas' },
    { name: 'SiO2', type: 'oxide', color: 'white', state: 'solid' },
    { name: 'Na2SO4', type: 'salt', color: 'white', state: 'solid' },
    { name: 'MgCl2', type: 'salt', color: 'white', state: 'solid' },
    { name: 'Al2O3', type: 'oxide', color: 'white', state: 'solid' },
    { name: 'Fe2O3', type: 'oxide', color: 'reddish-brown', state: 'solid' },
    { name: 'H2S', type: 'acid', color: 'colorless', state: 'gas' },
    { name: 'K2SO4', type: 'salt', color: 'white', state: 'solid' },
    { name: 'LiOH', type: 'base', color: 'white', state: 'solid' },
    { name: 'C3H6O', type: 'ketone', color: 'colorless', state: 'liquid' },
    { name: 'HBr', type: 'acid', color: 'colorless', state: 'liquid' },
    { name: 'MgO', type: 'oxide', color: 'white', state: 'solid' },
    { name: 'SO2', type: 'gas', color: 'colorless', state: 'gas' },
    { name: 'NO2', type: 'gas', color: 'brown', state: 'gas' },
    { name: 'H2SO4', type: 'acid', color: 'colorless', state: 'liquid' },
    { name: 'C4H10', type: 'alkane', color: 'colorless', state: 'gas' },
    { name: 'FeCl3', type: 'salt', color: 'yellow', state: 'solid' },
    { name: 'NH4Cl', type: 'salt', color: 'white', state: 'solid' },
    { name: 'HClO4', type: 'acid', color: 'colorless', state: 'liquid' },
    
    { name: 'H', type: 'gas', color: 'colorless', state: 'gas' },
    { name: 'He', type: 'gas', color: 'colorless', state: 'gas' },
    { name: 'Li', type: 'alkali metal', color: 'silver', state: 'solid' },
    { name: 'Be', type: 'alkaline earth metal', color: 'silver', state: 'solid' },
    { name: 'B', type: 'metalloid', color: 'black', state: 'solid' },
    { name: 'C', type: 'non-metal', color: 'black', state: 'solid' },
    { name: 'N', type: 'non-metal', color: 'colorless', state: 'gas' },
    { name: 'O', type: 'non-metal', color: 'colorless', state: 'gas' },
    { name: 'F', type: 'halogen', color: 'yellow', state: 'gas' },
    { name: 'Ne', type: 'noble gas', color: 'colorless', state: 'gas' },
    { name: 'Na', type: 'alkali metal', color: 'silver', state: 'solid' },
    { name: 'Mg', type: 'alkaline earth metal', color: 'silver', state: 'solid' },
    { name: 'Al', type: 'metal', color: 'silver', state: 'solid' },
    { name: 'Si', type: 'metalloid', color: 'gray', state: 'solid' },
    { name: 'P', type: 'non-metal', color: 'yellow', state: 'solid' },
    { name: 'S', type: 'non-metal', color: 'yellow', state: 'solid' },
    { name: 'Cl', type: 'halogen', color: 'greenish-yellow', state: 'gas' },
    { name: 'Ar', type: 'noble gas', color: 'colorless', state: 'gas' },
    { name: 'K', type: 'alkali metal', color: 'silver', state: 'solid' },
    { name: 'Ca', type: 'alkaline earth metal', color: 'silver', state: 'solid' },
    { name: 'Sc', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Ti', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'V', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Cr', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Mn', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Fe', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Co', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Ni', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Cu', type: 'transition metal', color: 'copper', state: 'solid' },
    { name: 'Zn', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Ga', type: 'metal', color: 'silver', state: 'solid' },
    { name: 'Ge', type: 'metalloid', color: 'gray', state: 'solid' },
    { name: 'As', type: 'metalloid', color: 'gray', state: 'solid' },
    { name: 'Se', type: 'non-metal', color: 'gray', state: 'solid' },
    { name: 'Br', type: 'halogen', color: 'reddish-brown', state: 'liquid' },
    { name: 'Kr', type: 'noble gas', color: 'colorless', state: 'gas' },
    { name: 'Rb', type: 'alkali metal', color: 'silver', state: 'solid' },
    { name: 'Sr', type: 'alkaline earth metal', color: 'silver', state: 'solid' },
    { name: 'Y', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Zr', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Nb', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Mo', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Tc', type: 'transition metal', color: 'gray', state: 'solid' },
    { name: 'Ru', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Rh', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Pd', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Ag', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Cd', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'In', type: 'metal', color: 'silver', state: 'solid' },
    { name: 'Sn', type: 'metal', color: 'gray', state: 'solid' },
    { name: 'Sb', type: 'metalloid', color: 'gray', state: 'solid' },
    { name: 'Te', type: 'metalloid', color: 'gray', state: 'solid' },
    { name: 'I', type: 'halogen', color: 'purple', state: 'solid' },
    { name: 'Xe', type: 'noble gas', color: 'colorless', state: 'gas' },
    { name: 'Cs', type: 'alkali metal', color: 'silver', state: 'solid' },
    { name: 'Ba', type: 'alkaline earth metal', color: 'silver', state: 'solid' },
    { name: 'La', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Ce', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Pr', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Nd', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Pm', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Sm', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Eu', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Gd', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Tb', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Dy', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Ho', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Er', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Tm', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Yb', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Lu', type: 'lanthanide', color: 'silver', state: 'solid' },
    { name: 'Hf', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Ta', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'W', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Re', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Os', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Ir', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Pt', type: 'transition metal', color: 'silver', state: 'solid' },
    { name: 'Au', type: 'transition metal', color: 'gold', state: 'solid' },
    { name: 'Hg', type: 'transition metal', color: 'silver', state: 'liquid' },
    { name: 'Tl', type: 'metal', color: 'gray', state: 'solid' }
	];

// Array of reactions with reactants and products
const reactions = [
    { reactants: ['HCl', 'NaOH'], products: ['NaCl', 'H2O'] },
    { reactants: ['H2SO4', 'NaOH'], products: ['Na2SO4', 'H2O'] },
    { reactants: ['H2', 'O2'], products: ['H2O'] },
    { reactants: ['CO2', 'H2O'], products: ['H2CO3'] },
    { reactants: ['N2', 'H2'], products: ['NH3'] },
    { reactants: ['CH4', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['C2H4', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['C2H2', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['Na2CO3', 'HCl'], products: ['NaCl', 'CO2', 'H2O'] },
    { reactants: ['CaCO3', 'HCl'], products: ['CaCl2', 'CO2', 'H2O'] },
    { reactants: ['H2SO4', 'Cu'], products: ['CuSO4', 'SO2', 'H2O'] },
    { reactants: ['H2SO4', 'Zn'], products: ['ZnSO4', 'H2O', 'SO2'] },
    { reactants: ['HNO3', 'Cu'], products: ['Cu(NO3)2', 'NO2', 'H2O'] },
    { reactants: ['H3PO4', 'NaOH'], products: ['Na3PO4', 'H2O'] },
    { reactants: ['MgSO4', 'Na2CO3'], products: ['MgCO3', 'Na2SO4'] },
    { reactants: ['KNO3', 'HCl'], products: ['KCl', 'NO2', 'H2O'] },
    { reactants: ['ZnSO4', 'NaOH'], products: ['Zn(OH)2', 'Na2SO4'] },
    { reactants: ['Pb(NO3)2', 'Na2SO4'], products: ['PbSO4', '2NaNO3'] },
    { reactants: ['H2O2', 'I2'], products: ['2HI', 'O2'] },
    { reactants: ['C6H12O6', 'O2'], products: ['6CO2', '6H2O'] },
    { reactants: ['NaHCO3', 'HCl'], products: ['NaCl', 'CO2', 'H2O'] },
    { reactants: ['Fe2O3', 'Al'], products: ['Fe', 'Al2O3'] },
    { reactants: ['CH4', 'Cl2'], products: ['CH3Cl', 'HCl'] },
    { reactants: ['H2', 'Cl2'], products: ['2HCl'] },
    { reactants: ['C6H6', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['NH3', 'O2'], products: ['NO', 'H2O'] },
    { reactants: ['CO', 'O2'], products: ['CO2'] },
    { reactants: ['H2S', 'O2'], products: ['SO2', 'H2O'] },
    { reactants: ['K2SO4', 'BaCl2'], products: ['BaSO4', '2KCl'] },
    { reactants: ['LiOH', 'HCl'], products: ['LiCl', 'H2O'] },
    { reactants: ['C3H6O', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['HBr', 'NaOH'], products: ['NaBr', 'H2O'] },
    { reactants: ['MgO', 'H2O'], products: ['Mg(OH)2'] },
    { reactants: ['SO2', 'O2'], products: ['SO3'] },
    { reactants: ['NO2', 'H2O'], products: ['HNO3'] },
    { reactants: ['H2S04', 'NaOH'], products: ['Na2SO4', 'H2O'] },
    { reactants: ['C4H10', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['FeCl3', 'NaOH'], products: ['Fe(OH)3', 'NaCl'] },
    { reactants: ['NH4Cl', 'NaOH'], products: ['NH3', 'NaCl', 'H2O'] },
    { reactants: ['HClO4', 'NaOH'], products: ['NaClO4', 'H2O'] },
    { reactants: ['HCl', 'KOH'], products: ['KCl', 'H2O'] },
    { reactants: ['H2SO4', 'BaCl2'], products: ['BaSO4', '2HCl'] },
    { reactants: ['CH4', 'Br2'], products: ['CH3Br', 'HBr'] },
    { reactants: ['NH3', 'HCl'], products: ['NH4Cl'] },
    { reactants: ['C2H5OH', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['H2S', 'O2'], products: ['SO2', 'H2O'] },
    { reactants: ['HNO3', 'H2O2'], products: ['NO3', 'H2O'] },
    { reactants: ['Ca(OH)2', 'HCl'], products: ['CaCl2', 'H2O'] },
    { reactants: ['NaHCO3', 'CH3COOH'], products: ['CH3COONa', 'CO2', 'H2O'] },
    { reactants: ['Al2O3', 'HCl'], products: ['AlCl3', 'H2O'] },
    { reactants: ['C2H4', 'H2'], products: ['C2H6'] },
    { reactants: ['K2SO4', 'MgCl2'], products: ['MgSO4', '2KCl'] },
    { reactants: ['Na2SO4', 'BaCl2'], products: ['BaSO4', '2NaCl'] },
    { reactants: ['C6H6', 'Br2'], products: ['C6H5Br', 'HBr'] },
    { reactants: ['H2S', 'O2'], products: ['SO2', 'H2O'] },
    { reactants: ['NaOH', 'H2SO4'], products: ['Na2SO4', 'H2O'] },
    { reactants: ['Fe', 'O2'], products: ['Fe2O3'] },
    { reactants: ['HCl', 'Zn'], products: ['ZnCl2', 'H2'] },
    { reactants: ['NH3', 'H2SO4'], products: ['(NH4)2SO4'] },
    { reactants: ['H2SO4', 'H2O'], products: ['H3O+', 'HSO4-'] },
    { reactants: ['CH3COOH', 'H2SO4'], products: ['CH3COOSO3H', 'H2O'] },
    { reactants: ['Cu', 'H2SO4'], products: ['CuSO4', 'SO2', 'H2O'] },
    { reactants: ['C3H6O', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['Na2CO3', 'HCl'], products: ['NaCl', 'CO2', 'H2O'] },
    { reactants: ['KCl', 'H2SO4'], products: ['KHSO4', 'HCl'] },
    { reactants: ['SO3', 'H2O'], products: ['H2SO4'] },
    { reactants: ['CH4', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['C6H12O6', 'O2'], products: ['6CO2', '6H2O'] },
    { reactants: ['C2H5OH', 'HCl'], products: ['C2H5Cl', 'H2O'] },
    { reactants: ['Fe2O3', 'Al'], products: ['Fe', 'Al2O3'] },
    { reactants: ['Cl2', 'H2O'], products: ['HOCl', 'HCl'] },
    { reactants: ['HClO4', 'H2O'], products: ['H3O+', 'ClO4-'] },
    { reactants: ['HCl', 'Na2CO3'], products: ['NaCl', 'CO2', 'H2O'] },
    { reactants: ['KNO3', 'HCl'], products: ['KCl', 'NO2', 'H2O'] },
    { reactants: ['C6H6', 'Cl2'], products: ['C6H5Cl', 'HCl'] },
    { reactants: ['H2', 'Br2'], products: ['2HBr'] },
    { reactants: ['CH4', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['C3H6O', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['H2O2', 'H2S'], products: ['H2SO4', 'H2O'] },

    { reactants: ['NaHCO3', 'HCl', 'CH3COOH'], products: ['CH3COONa', 'CO2', 'H2O'] },
    { reactants: ['CH4', 'Cl2', 'UV'], products: ['CH3Cl', 'HCl'] },
    { reactants: ['CaCO3', 'HCl', 'H2O'], products: ['CaCl2', 'CO2', 'H2O'] },
    { reactants: ['H2SO4', 'NaOH', 'H2O'], products: ['Na2SO4', 'H2O'] },
    { reactants: ['NH3', 'CO2', 'H2O'], products: ['NH4HCO3'] },
    { reactants: ['C6H6', 'H2', 'Ni'], products: ['C6H12'] },
    { reactants: ['FeCl3', 'NaOH', 'H2O'], products: ['Fe(OH)3', 'NaCl'] },
    { reactants: ['H2O2', 'I2', 'H2SO4'], products: ['2HI', 'O2', 'H2SO4'] },
    { reactants: ['CH3COOH', 'O2', 'H2SO4'], products: ['CH3COOH', 'CO2', 'H2O'] },
    { reactants: ['H2O2', 'SO2', 'H2O'], products: ['H2SO4'] },
    { reactants: ['C2H5OH', 'O2', 'H2SO4'], products: ['CH3COOH', 'H2O'] },
    { reactants: ['H2S', 'O2', 'H2O'], products: ['SO2', 'H2O'] },
    { reactants: ['KClO3', 'HCl'], products: ['KCl', 'Cl2', 'H2O'] },
    { reactants: ['Na2SO4', 'BaCl2', 'H2O'], products: ['BaSO4', '2NaCl'] },
    { reactants: ['H2SO4', 'Zn', 'H2O'], products: ['ZnSO4', 'H2O'] },
    { reactants: ['H2SO4', 'H2O2', 'H2O'], products: ['H2SO4', 'O2'] },
    { reactants: ['Na2CO3', 'H2SO4', 'H2O'], products: ['Na2SO4', 'CO2', 'H2O'] },
    { reactants: ['Ca(OH)2', 'CO2', 'H2O'], products: ['CaCO3', 'H2O'] },
    { reactants: ['NaOH', 'CO2', 'H2O'], products: ['NaHCO3'] },
    { reactants: ['CH4', 'O2', 'UV'], products: ['CO2', 'H2O'] },
    { reactants: ['HCl', 'Zn', 'H2O'], products: ['ZnCl2', 'H2'] },
    { reactants: ['CH3COOH', 'O2'], products: ['CO2', 'H2O'] },
    { reactants: ['C2H4', 'O2', 'UV'], products: ['CO2', 'H2O'] },
    { reactants: ['H2O2', 'H2S', 'H2SO4'], products: ['H2SO4', 'H2O'] },
    { reactants: ['NaOH', 'CH3COOH', 'H2O'], products: ['CH3COONa', 'H2O'] },
    { reactants: ['H2O2', 'H2S', 'H2SO4'], products: ['H2SO4', 'H2O'] },
    { reactants: ['H2S', 'O2', 'H2SO4'], products: ['SO2', 'H2O'] },
    { reactants: ['CaCO3', 'HCl', 'H2O'], products: ['CaCl2', 'CO2', 'H2O'] },
    { reactants: ['C2H5OH', 'O2', 'H2SO4'], products: ['CH3COOH', 'H2O'] },
    { reactants: ['C6H12O6', 'O2'], products: ['6CO2', '6H2O'] },
    { reactants: ['NH3', 'CO2', 'H2O'], products: ['NH4HCO3'] },
    { reactants: ['H2S', 'O2', 'H2O'], products: ['SO2', 'H2O'] },

	
    { reactants: ['Na', 'H2O'], products: ['NaOH', 'H2'] },
    { reactants: ['Mg', 'Cl2'], products: ['MgCl2'] },
    { reactants: ['N2', 'H2'], products: ['NH3'] },
    { reactants: ['Ca', 'H2O'], products: ['Ca(OH)2', 'H2'] },
    { reactants: ['2H2S', '3O2'], products: ['2SO2', '2H2O'] },
    { reactants: ['Cu', 'O2'], products: ['CuO'] },
    { reactants: ['H2SO4', 'Zn'], products: ['ZnSO4', 'H2O'] },
    { reactants: ['2H2', 'O2'], products: ['2H2O'] },
    { reactants: ['Ba', 'H2O'], products: ['Ba(OH)2', 'H2'] },
    { reactants: ['FeS2', 'O2'], products: ['Fe2O3', 'SO2'] },
    { reactants: ['2KClO3'], products: ['2KCl', '3O2'] },
    { reactants: ['H2', 'Cl2'], products: ['2HCl'] },
    { reactants: ['HCl', 'CaCO3'], products: ['CaCl2', 'H2O', 'CO2'] },
    { reactants: ['C4H10', 'O2'], products: ['4CO2', '5H2O'] },
    { reactants: ['Zn', 'CuSO4'], products: ['ZnSO4', 'Cu'] },
    { reactants: ['H2S', 'O2'], products: ['SO2', 'H2O'] },
    { reactants: ['C2H6', 'O2'], products: ['2CO2', '3H2O'] },
    { reactants: ['Fe', 'S'], products: ['FeS'] },
    { reactants: ['NH3', 'O2'], products: ['NO', 'H2O'] },
    { reactants: ['NaOH', 'HCl'], products: ['NaCl', 'H2O'] },
    { reactants: ['C2H5OH', 'O2'], products: ['2CO2', '3H2O'] },
    { reactants: ['H2O2', 'H2S'], products: ['S', 'H2O'] },
    { reactants: ['KBr', 'Cl2'], products: ['KCl', 'Br2'] },
    { reactants: ['CH4', 'O2'], products: ['CO2', '2H2O'] },
    { reactants: ['Ag', 'HNO3'], products: ['AgNO3', 'H2O'] },
    { reactants: ['H2S', 'Cl2'], products: ['S', 'HCl'] },
    { reactants: ['Mg', 'N2'], products: ['Mg3N2'] },
    { reactants: ['C6H12O6', 'O2'], products: ['6CO2', '6H2O'] },
    { reactants: ['H2SO4', 'Al'], products: ['Al2(SO4)3', 'H2'] },
    { reactants: ['H2', 'Br2'], products: ['2HBr'] },
    { reactants: ['SO2', 'O2'], products: ['SO3'] },
    { reactants: ['N2', 'O2'], products: ['2NO'] },
    { reactants: ['C6H6', 'O2'], products: ['6CO2', '3H2O'] },
    { reactants: ['CaCl2', 'Na2CO3'], products: ['CaCO3', '2NaCl'] },
    { reactants: ['Al', 'H2SO4'], products: ['Al2(SO4)3', 'H2'] },
    { reactants: ['H2O', 'CO2'], products: ['H2CO3'] },
    { reactants: ['C2H5OH', 'HCl'], products: ['C2H5Cl', 'H2O'] },
    { reactants: ['Na', 'O2'], products: ['Na2O'] },
    { reactants: ['Cu', 'H2SO4'], products: ['CuSO4', 'H2O'] },
    { reactants: ['HNO3', 'NaOH'], products: ['NaNO3', 'H2O'] },
    { reactants: ['Zn', 'H2SO4'], products: ['ZnSO4', 'H2'] },
    { reactants: ['2Na', '2H2O'], products: ['2NaOH', 'H2'] },
    { reactants: ['CH4', 'Cl2'], products: ['CH3Cl', 'HCl'] },
    { reactants: ['Fe', 'H2SO4'], products: ['FeSO4', 'H2'] },
    { reactants: ['Li', 'H2O'], products: ['LiOH', 'H2'] },
    { reactants: ['2H2', '2O2'], products: ['2H2O'] },
    { reactants: ['Ca', 'Cl2'], products: ['CaCl2'] }

];

// Function to display chemicals based on search input
function displayChemicals(searchQuery) {
    const chemicalList = document.getElementById('chemicalList');
    chemicalList.innerHTML = '';
    chemicals.forEach(chemical => {
        if (chemical.name.toLowerCase().includes(searchQuery)) {
            const chemicalItem = document.createElement('div');
            chemicalItem.className = 'chemical-item';
            chemicalItem.textContent = chemical.name;
            chemicalItem.draggable = true;
            chemicalItem.ondragstart = drag;
            chemicalList.appendChild(chemicalItem);
        }
    });
}

// Drag event handler
function drag(event) {
    event.dataTransfer.setData('text', event.target.textContent);
}

// Drop event handler
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text');
    const beaker = document.getElementById('beaker');
    const chemicalElement = document.createElement('div');
    chemicalElement.className = 'chemical-animation';
    chemicalElement.textContent = data;
    beaker.appendChild(chemicalElement);
}

// Allow drop
function allowDrop(event) {
    event.preventDefault();
}

// Function to check if the reactants match any reaction
function checkReaction() {
    const beaker = document.getElementById('beaker');
    const reactants = Array.from(beaker.children).map(item => item.textContent);
    const sortedReactants = reactants.sort().toString();
    
    let reactionFound = false;
    reactions.forEach(reaction => {
        if (reaction.reactants.sort().toString() === sortedReactants) {
            document.getElementById('resultBox').textContent = `Products: ${reaction.products.join(' + ')}`;
            document.getElementById('resultBox').style.display = 'block';
            reactionFound = true;
        }
    });

    if (!reactionFound) {
        document.getElementById('resultBox').textContent = 'No reaction found with the given reactants.';
        document.getElementById('resultBox').style.display = 'block';
    }
}

// Function to reset the lab for a new test
function resetLab() {
    document.getElementById('beaker').innerHTML = 'Drop Chemicals Here';
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('resultBox').textContent = '';
}

// Initialize event listeners for the beaker
document.getElementById('beaker').ondrop = drop;
document.getElementById('beaker').ondragover = allowDrop;

// Initial call to display all chemicals
displayChemicals('');