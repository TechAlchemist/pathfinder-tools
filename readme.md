# Pathfinder API Project

Pathfinder API project is an open-source project for the popular table-top  [Pathfinder RPG](https://paizo.com/pathfinder). This API serves as a backend to React and React Native projects.  

## PathfinderAPI End Points

All requests to these endpoints need to go through: 

``` /api ```

Preceding /api will be the category of resources

``` /api/magic_items ```

``` /api/weapons ```

For example my full development api path is: 

``` http://localhost:3001/api/magic_items/armors ```

---

## Magic Item Endpoints

|Endpoint | Data Recieved|
|--------|------------|
| All magic items unfiltered| /all_magic_items|
| Ammunition | /ammunitions |
| Specific Magic Armors | /armors | 
| Artifacts | /artifacts |
| Cursed items | /cursed_items |
| Magical Tattoos | /magical_tattoos |
| Potions | /potions |
| Rings | /rings |
| Rods | /rods |
| Shadow Piercings | /shadow_piercings |
| Staves ("Staffs") | /staves |
| Specific Magic Weapons | /weapons |
| Wondrous Items | /wondrous_items |

---

## Mundane or Basic Weapons

| Endpoint | Data Recieved |
| ---------|---------------|
| All weapons | /all_weapons |

Base Weapons are broken down into the following weapon groups. 

        light_melee
        simple_light_melee
        simple_one_handed_melee
        simple_two_handed_melee
        simple_ranged
        martial_light_melee
        martial_one_handed_melee
        martial_two_handed_melee
        martial_ranged
        exotic_light_melee
        exotic_one_handed_melee
        exotic_two_handed_melee
        exotic_ranged

## Conventions Followed

All files use snake_case.

All variables use camelCase.

