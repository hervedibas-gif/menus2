const BASE_M=[{"day":"Lundi","week":1,"breakfast":"Lait demi-écrémé + flocons d’avoine + ananas + thé","lunch":"Entrée : Salade de concombre, radis et citron vert • Plat : Gambas grillées ail-citron + riz complet + brocoli vapeur","snack":"","dinner":"Carpaccio de bar aux agrumes + salade roquette, concombre et avocat"},{"day":"Mardi","week":1,"breakfast":"2 œufs brouillés + 1 tranche de pain complet + papaye + café ou thé","lunch":"Entrée : Carpaccio de courgette, citron et parmesan • Plat : Capitaine braisé aux herbes + riz sauvage + poêlée de gombo et courgette","snack":"","dinner":"Capitaine en papillote citronnée + carottes rôties et courgettes"},{"day":"Mercredi","week":1,"breakfast":"Yaourt nature + muesli sans sucre + mangue","lunch":"Entrée : Tomates, mozzarella et basilic • Plat : Dinde rôtie au thym + patate douce rôtie + légumes verts","snack":"","dinner":"Omelette aux champignons et fines herbes + gombo sauté à la tomate"},{"day":"Jeudi","week":1,"breakfast":"Tartine de pain complet + avocat + œuf poché + thé","lunch":"Entrée : Salade de chou rouge, carotte et coriandre • Plat : Poulet basquaise léger + haricots rouges + courgettes et poivrons","snack":"","dinner":"Brochettes de poulet citronnées + poêlée de gombo et poivrons"},{"day":"Vendredi","week":1,"breakfast":"Fromage blanc + pomme + 1 c. à soupe d’amandes","lunch":"Entrée : Gaspacho de tomate et concombre • Plat : Gambas sautées gingembre-coriandre + riz basmati + carottes et courgettes rôties","snack":"","dinner":"Ceviche de bar au citron vert + tomates rôties et épinards"},{"day":"Samedi","week":1,"breakfast":"Porridge au lait + banane + cannelle","lunch":"Entrée : Avocat, concombre et citron • Plat : Dorade en papillote au gingembre + riz complet + légumes méditerranéens","snack":"","dinner":"Escalope de veau au citron + salade tomate-mozzarella-basilic"},{"day":"Dimanche","week":1,"breakfast":"Omelette aux fines herbes + pain complet + orange","lunch":"Entrée : Poivrons grillés marinés aux herbes • Plat : Filet mignon de porc aux herbes + lentilles tièdes + salade croquante","snack":"","dinner":"Tartare de saumon concombre-avocat + courgettes au citron et champignons"},{"day":"Lundi","week":2,"breakfast":"Yaourt grec nature + flocons d’avoine + fruit de la passion","lunch":"Entrée : Salade de fenouil, orange et roquette • Plat : Poulet basquaise léger + semoule complète + ratatouille","snack":"","dinner":"Gambas grillées ail-citron + épinards sautés et champignons"},{"day":"Mardi","week":2,"breakfast":"Pain complet + fromage frais + concombre + thé","lunch":"Entrée : Aubergines grillées au citron • Plat : Gambas sautées gingembre-coriandre + haricots rouges + aubergines et tomates rôties","snack":"","dinner":"Dinde marinée citron-thym + poivrons grillés et aubergines"},{"day":"Mercredi","week":2,"breakfast":"Œufs à la coque + tartine complète + pastèque","lunch":"Entrée : Salade de tomates, oignon rouge et basilic • Plat : Dorade en papillote au gingembre + pommes grenaille + chou braisé aux herbes","snack":"","dinner":"Gambas au gingembre et coriandre + salade de chou et concombre"},{"day":"Jeudi","week":2,"breakfast":"Overnight oats au yaourt + mangue + graines de chia","lunch":"Entrée : Courgettes crues marinées au citron • Plat : Filet mignon de porc aux herbes + quinoa + haricots verts","snack":"","dinner":"Carpaccio de bar aux agrumes + asperges et salade de roquette"},{"day":"Vendredi","week":2,"breakfast":"Fromage blanc + ananas + quelques noix","lunch":"Entrée : Salade de gombo, tomate et oignon rouge • Plat : Saumon rôti citron-aneth + lentilles tièdes + épinards sautés","snack":"","dinner":"Capitaine en papillote citronnée + haricots verts à l’ail"},{"day":"Samedi","week":2,"breakfast":"Omelette tomate-oignon + pain complet + papaye","lunch":"Entrée : Betterave, roquette et mozzarella • Plat : Dorade grillée sauce vierge + manioc vapeur + brocoli vapeur","snack":"","dinner":"Œufs cocotte aux épinards + salade verte, avocat et tomate"},{"day":"Dimanche","week":2,"breakfast":"Muesli sans sucre + lait demi-écrémé + pomme","lunch":"Entrée : Salade verte, avocat et graines • Plat : Carpaccio de bar aux agrumes + pois chiches citronnés + poêlée de gombo et courgette","snack":"","dinner":"Dorade en ceviche au fruit de la passion + courgettes grillées et poivrons"},{"day":"Lundi","week":3,"breakfast":"Tartine complète + beurre de cacahuète fin + banane","lunch":"Entrée : Carottes râpées au gingembre et citron • Plat : Filet mignon de porc aux herbes + pommes grenaille + légumes verts","snack":"","dinner":"Ceviche de bar au citron vert + salade de concombre, radis et menthe"},{"day":"Mardi","week":3,"breakfast":"Yaourt nature + papaye + avoine + cannelle","lunch":"Entrée : Concombre à la menthe et yaourt léger • Plat : Saumon rôti citron-aneth + patate douce rôtie + courgettes et poivrons","snack":"","dinner":"Escalope de veau au citron + salade roquette, concombre et avocat"},{"day":"Mercredi","week":3,"breakfast":"Œufs brouillés aux champignons + pain complet + thé","lunch":"Entrée : Salade de cœur de palmier et tomate • Plat : Dorade grillée sauce vierge + boulgour complet + carottes et courgettes rôties","snack":"","dinner":"Carpaccio de thon sésame-citron + carottes rôties et courgettes"},{"day":"Jeudi","week":3,"breakfast":"Porridge pomme-cannelle + lait demi-écrémé","lunch":"Entrée : Champignons frais, roquette et citron • Plat : Carpaccio de bar aux agrumes + manioc vapeur + légumes méditerranéens","snack":"","dinner":"Langouste grillée aux herbes + gombo sauté à la tomate"},{"day":"Vendredi","week":3,"breakfast":"Avocat sur pain complet + œuf dur + orange","lunch":"Entrée : Salade de haricots verts et tomate • Plat : Escalope de veau citronnée + riz complet + salade croquante","snack":"","dinner":"Dinde marinée citron-thym + poêlée de gombo et poivrons"},{"day":"Samedi","week":3,"breakfast":"Fromage blanc + mangue + quelques amandes","lunch":"Entrée : Ratatouille froide aux herbes • Plat : Tartare de thon citron-sésame + riz sauvage + ratatouille","snack":"","dinner":"Gambas au gingembre et coriandre + tomates rôties et épinards"},{"day":"Dimanche","week":3,"breakfast":"Crêpe d’avoine maison + yaourt nature + ananas","lunch":"Entrée : Salade de courgette, tomate et mozzarella • Plat : Brochettes de capitaine marinées + patate douce rôtie + aubergines et tomates rôties","snack":"","dinner":"Tartare de thon à l’avocat + salade tomate-mozzarella-basilic"},{"day":"Lundi","week":4,"breakfast":"Lait demi-écrémé + flocons d’avoine + ananas + thé","lunch":"Entrée : Gaspacho de poivron rouge • Plat : Carpaccio de bar aux agrumes + haricots rouges + chou braisé aux herbes","snack":"","dinner":"Saumon rôti citron-aneth + courgettes au citron et champignons"},{"day":"Mardi","week":4,"breakfast":"2 œufs brouillés + 1 tranche de pain complet + papaye + café ou thé","lunch":"Entrée : Salade de chou blanc, concombre et citron • Plat : Escalope de veau citronnée + riz basmati + haricots verts","snack":"","dinner":"Œufs cocotte aux épinards + épinards sautés et champignons"},{"day":"Mercredi","week":4,"breakfast":"Yaourt nature + muesli sans sucre + mangue","lunch":"Entrée : Aubergine, tomate et basilic • Plat : Tartare de thon citron-sésame + riz complet + épinards sautés","snack":"","dinner":"Dorade en ceviche au fruit de la passion + poivrons grillés et aubergines"},{"day":"Jeudi","week":4,"breakfast":"Tartine de pain complet + avocat + œuf poché + thé","lunch":"Entrée : Salade de crudités tropicales • Plat : Brochettes de capitaine marinées + lentilles tièdes + brocoli vapeur","snack":"","dinner":"Dorade grillée sauce vierge + salade de chou et concombre"},{"day":"Vendredi","week":4,"breakfast":"Fromage blanc + pomme + 1 c. à soupe d’amandes","lunch":"Entrée : Tomates cerises, avocat et mozzarella • Plat : Ceviche de bar au citron vert + semoule complète + poêlée de gombo et courgette","snack":"","dinner":"Filet mignon de porc grillé + asperges et salade de roquette"},{"day":"Samedi","week":4,"breakfast":"Porridge au lait + banane + cannelle","lunch":"Entrée : Salade de fenouil, concombre et citron • Plat : Filet de bœuf grillé au poivre + haricots rouges + légumes verts","snack":"","dinner":"Carpaccio de thon sésame-citron + haricots verts à l’ail"},{"day":"Dimanche","week":4,"breakfast":"Omelette aux fines herbes + pain complet + orange","lunch":"Entrée : Carpaccio de tomate, mozzarella et basilic • Plat : Ceviche de dorade mangue-avocat + pommes grenaille + courgettes et poivrons","snack":"","dinner":"Langouste grillée aux herbes + salade verte, avocat et tomate"},{"day":"Lundi","week":5,"breakfast":"Yaourt grec nature + flocons d’avoine + fruit de la passion","lunch":"Entrée : Salade de concombre, radis et citron vert • Plat : Brochettes de capitaine marinées + quinoa + carottes et courgettes rôties","snack":"","dinner":"Filet de bœuf grillé + courgettes grillées et poivrons"},{"day":"Mardi","week":5,"breakfast":"Pain complet + fromage frais + concombre + thé","lunch":"Entrée : Carpaccio de courgette, citron et parmesan • Plat : Ceviche de bar au citron vert + lentilles tièdes + légumes méditerranéens","snack":"","dinner":"Langouste rôtie ail-persil + salade de concombre, radis et menthe"},{"day":"Mercredi","week":5,"breakfast":"Œufs à la coque + tartine complète + pastèque","lunch":"Entrée : Tomates, mozzarella et basilic • Plat : Filet de bœuf grillé au poivre + manioc vapeur + salade croquante","snack":"","dinner":"Tartare de thon à l’avocat + salade roquette, concombre et avocat"},{"day":"Jeudi","week":5,"breakfast":"Overnight oats au yaourt + mangue + graines de chia","lunch":"Entrée : Salade de chou rouge, carotte et coriandre • Plat : Ceviche de dorade mangue-avocat + pois chiches citronnés + ratatouille","snack":"","dinner":"Saumon rôti citron-aneth + carottes rôties et courgettes"},{"day":"Vendredi","week":5,"breakfast":"Fromage blanc + ananas + quelques noix","lunch":"Entrée : Gaspacho de tomate et concombre • Plat : Langouste rôtie ail-persil + pommes grenaille + aubergines et tomates rôties","snack":"","dinner":"Mozzarella, tomates et basilic avec jambon blanc maigre + gombo sauté à la tomate"},{"day":"Samedi","week":5,"breakfast":"Omelette tomate-oignon + pain complet + papaye","lunch":"Entrée : Avocat, concombre et citron • Plat : Langouste grillée aux herbes + patate douce rôtie + chou braisé aux herbes","snack":"","dinner":"Salade de poulet, avocat et mozzarella + poêlée de gombo et poivrons"},{"day":"Dimanche","week":5,"breakfast":"Muesli sans sucre + lait demi-écrémé + pomme","lunch":"Entrée : Poivrons grillés marinés aux herbes • Plat : Poulet yassa léger + boulgour complet + haricots verts","snack":"","dinner":"Dorade grillée sauce vierge + tomates rôties et épinards"},{"day":"Lundi","week":6,"breakfast":"Tartine complète + beurre de cacahuète fin + banane","lunch":"Entrée : Salade de fenouil, orange et roquette • Plat : Ceviche de dorade mangue-avocat + manioc vapeur + épinards sautés","snack":"","dinner":"Filet mignon de porc grillé + salade tomate-mozzarella-basilic"},{"day":"Mardi","week":6,"breakfast":"Yaourt nature + papaye + avoine + cannelle","lunch":"Entrée : Aubergines grillées au citron • Plat : Langouste rôtie ail-persil + riz complet + brocoli vapeur","snack":"","dinner":"Brochettes de poulet citronnées + courgettes au citron et champignons"},{"day":"Mercredi","week":6,"breakfast":"Œufs brouillés aux champignons + pain complet + thé","lunch":"Entrée : Salade de tomates, oignon rouge et basilic • Plat : Langouste grillée aux herbes + riz sauvage + poêlée de gombo et courgette","snack":"","dinner":"Ceviche de dorade mangue-avocat + épinards sautés et champignons"},{"day":"Jeudi","week":6,"breakfast":"Porridge pomme-cannelle + lait demi-écrémé","lunch":"Entrée : Courgettes crues marinées au citron • Plat : Poulet yassa léger + patate douce rôtie + légumes verts","snack":"","dinner":"Filet de bœuf grillé + poivrons grillés et aubergines"},{"day":"Vendredi","week":6,"breakfast":"Avocat sur pain complet + œuf dur + orange","lunch":"Entrée : Salade de gombo, tomate et oignon rouge • Plat : Gambas au curry doux + haricots rouges + courgettes et poivrons","snack":"","dinner":"Langouste rôtie ail-persil + salade de chou et concombre"},{"day":"Samedi","week":6,"breakfast":"Fromage blanc + mangue + quelques amandes","lunch":"Entrée : Betterave, roquette et mozzarella • Plat : Bœuf sauté gingembre-poivrons + riz basmati + carottes et courgettes rôties","snack":"","dinner":"Gambas grillées ail-citron + asperges et salade de roquette"},{"day":"Dimanche","week":6,"breakfast":"Crêpe d’avoine maison + yaourt nature + ananas","lunch":"Entrée : Salade verte, avocat et graines • Plat : Gambas grillées ail-citron + riz complet + légumes méditerranéens","snack":"","dinner":"Poulet grillé aux herbes + haricots verts à l’ail"},{"day":"Lundi","week":7,"breakfast":"Lait demi-écrémé + flocons d’avoine + ananas + thé","lunch":"Entrée : Carottes râpées au gingembre et citron • Plat : Poulet yassa léger + lentilles tièdes + salade croquante","snack":"","dinner":"Mozzarella, tomates et basilic avec jambon blanc maigre + salade verte, avocat et tomate"},{"day":"Mardi","week":7,"breakfast":"2 œufs brouillés + 1 tranche de pain complet + papaye + café ou thé","lunch":"Entrée : Concombre à la menthe et yaourt léger • Plat : Gambas au curry doux + semoule complète + ratatouille","snack":"","dinner":"Salade de poulet, avocat et mozzarella + courgettes grillées et poivrons"},{"day":"Mercredi","week":7,"breakfast":"Yaourt nature + muesli sans sucre + mangue","lunch":"Entrée : Salade de cœur de palmier et tomate • Plat : Bœuf sauté gingembre-poivrons + haricots rouges + aubergines et tomates rôties","snack":"","dinner":"Capitaine en papillote citronnée + salade de concombre, radis et menthe"},{"day":"Jeudi","week":7,"breakfast":"Tartine de pain complet + avocat + œuf poché + thé","lunch":"Entrée : Champignons frais, roquette et citron • Plat : Gambas grillées ail-citron + pommes grenaille + chou braisé aux herbes","snack":"","dinner":"Omelette aux champignons et fines herbes + salade roquette, concombre et avocat"},{"day":"Vendredi","week":7,"breakfast":"Fromage blanc + pomme + 1 c. à soupe d’amandes","lunch":"Entrée : Salade de haricots verts et tomate • Plat : Capitaine braisé aux herbes + quinoa + haricots verts","snack":"","dinner":"Brochettes de poulet citronnées + carottes rôties et courgettes"},{"day":"Samedi","week":7,"breakfast":"Porridge au lait + banane + cannelle","lunch":"Entrée : Ratatouille froide aux herbes • Plat : Dinde rôtie au thym + lentilles tièdes + épinards sautés","snack":"","dinner":"Ceviche de dorade mangue-avocat + gombo sauté à la tomate"},{"day":"Dimanche","week":7,"breakfast":"Omelette aux fines herbes + pain complet + orange","lunch":"Entrée : Salade de courgette, tomate et mozzarella • Plat : Poulet basquaise léger + manioc vapeur + brocoli vapeur","snack":"","dinner":"Escalope de veau au citron + poêlée de gombo et poivrons"},{"day":"Lundi","week":8,"breakfast":"Yaourt grec nature + flocons d’avoine + fruit de la passion","lunch":"Entrée : Gaspacho de poivron rouge • Plat : Gambas grillées ail-citron + pois chiches citronnés + poêlée de gombo et courgette","snack":"","dinner":"Tartare de saumon concombre-avocat + tomates rôties et épinards"},{"day":"Mardi","week":8,"breakfast":"Pain complet + fromage frais + concombre + thé","lunch":"Entrée : Salade de chou blanc, concombre et citron • Plat : Capitaine braisé aux herbes + pommes grenaille + légumes verts","snack":"","dinner":"Gambas grillées ail-citron + salade tomate-mozzarella-basilic"},{"day":"Mercredi","week":8,"breakfast":"Œufs à la coque + tartine complète + pastèque","lunch":"Entrée : Aubergine, tomate et basilic • Plat : Dinde rôtie au thym + patate douce rôtie + courgettes et poivrons","snack":"","dinner":"Poulet grillé aux herbes + courgettes au citron et champignons"},{"day":"Jeudi","week":8,"breakfast":"Overnight oats au yaourt + mangue + graines de chia","lunch":"Entrée : Salade de crudités tropicales • Plat : Poulet basquaise léger + boulgour complet + carottes et courgettes rôties","snack":"","dinner":"Gambas au gingembre et coriandre + épinards sautés et champignons"},{"day":"Vendredi","week":8,"breakfast":"Fromage blanc + ananas + quelques noix","lunch":"Entrée : Tomates cerises, avocat et mozzarella • Plat : Gambas sautées gingembre-coriandre + manioc vapeur + légumes méditerranéens","snack":"","dinner":"Carpaccio de bar aux agrumes + poivrons grillés et aubergines"},{"day":"Samedi","week":8,"breakfast":"Omelette tomate-oignon + pain complet + papaye","lunch":"Entrée : Salade de fenouil, concombre et citron • Plat : Dorade en papillote au gingembre + riz complet + salade croquante","snack":"","dinner":"Capitaine en papillote citronnée + salade de chou et concombre"},{"day":"Dimanche","week":8,"breakfast":"Muesli sans sucre + lait demi-écrémé + pomme","lunch":"Entrée : Carpaccio de tomate, mozzarella et basilic • Plat : Filet mignon de porc aux herbes + riz sauvage + ratatouille","snack":"","dinner":"Omelette aux champignons et fines herbes + asperges et salade de roquette"},{"day":"Lundi","week":9,"breakfast":"Tartine complète + beurre de cacahuète fin + banane","lunch":"Entrée : Salade de concombre, radis et citron vert • Plat : Poulet basquaise léger + patate douce rôtie + aubergines et tomates rôties","snack":"","dinner":"Dorade en ceviche au fruit de la passion + haricots verts à l’ail"},{"day":"Mardi","week":9,"breakfast":"Yaourt nature + papaye + avoine + cannelle","lunch":"Entrée : Carpaccio de courgette, citron et parmesan • Plat : Gambas sautées gingembre-coriandre + haricots rouges + chou braisé aux herbes","snack":"","dinner":"Ceviche de bar au citron vert + salade verte, avocat et tomate"},{"day":"Mercredi","week":9,"breakfast":"Œufs brouillés aux champignons + pain complet + thé","lunch":"Entrée : Tomates, mozzarella et basilic • Plat : Dorade en papillote au gingembre + riz basmati + haricots verts","snack":"","dinner":"Escalope de veau au citron + courgettes grillées et poivrons"},{"day":"Jeudi","week":9,"breakfast":"Porridge pomme-cannelle + lait demi-écrémé","lunch":"Entrée : Salade de chou rouge, carotte et coriandre • Plat : Filet mignon de porc aux herbes + riz complet + épinards sautés","snack":"","dinner":"Tartare de saumon concombre-avocat + salade de concombre, radis et menthe"},{"day":"Vendredi","week":9,"breakfast":"Avocat sur pain complet + œuf dur + orange","lunch":"Entrée : Gaspacho de tomate et concombre • Plat : Saumon rôti citron-aneth + lentilles tièdes + brocoli vapeur","snack":"","dinner":"Langouste grillée aux herbes + salade roquette, concombre et avocat"},{"day":"Samedi","week":9,"breakfast":"Fromage blanc + mangue + quelques amandes","lunch":"Entrée : Avocat, concombre et citron • Plat : Dorade grillée sauce vierge + semoule complète + poêlée de gombo et courgette","snack":"","dinner":"Dinde marinée citron-thym + carottes rôties et courgettes"},{"day":"Dimanche","week":9,"breakfast":"Crêpe d’avoine maison + yaourt nature + ananas","lunch":"Entrée : Poivrons grillés marinés aux herbes • Plat : Carpaccio de bar aux agrumes + haricots rouges + légumes verts","snack":"","dinner":"Gambas au gingembre et coriandre + gombo sauté à la tomate"},{"day":"Lundi","week":10,"breakfast":"Lait demi-écrémé + flocons d’avoine + ananas + thé","lunch":"Entrée : Salade de fenouil, orange et roquette • Plat : Filet mignon de porc aux herbes + pommes grenaille + courgettes et poivrons","snack":"","dinner":"Carpaccio de bar aux agrumes + poêlée de gombo et poivrons"},{"day":"Mardi","week":10,"breakfast":"2 œufs brouillés + 1 tranche de pain complet + papaye + café ou thé","lunch":"Entrée : Aubergines grillées au citron • Plat : Saumon rôti citron-aneth + quinoa + carottes et courgettes rôties","snack":"","dinner":"Saumon rôti citron-aneth + tomates rôties et épinards"},{"day":"Mercredi","week":10,"breakfast":"Yaourt nature + muesli sans sucre + mangue","lunch":"Entrée : Salade de tomates, oignon rouge et basilic • Plat : Dorade grillée sauce vierge + lentilles tièdes + légumes méditerranéens","snack":"","dinner":"Œufs cocotte aux épinards + salade tomate-mozzarella-basilic"},{"day":"Jeudi","week":10,"breakfast":"Tartine de pain complet + avocat + œuf poché + thé","lunch":"Entrée : Courgettes crues marinées au citron • Plat : Carpaccio de bar aux agrumes + manioc vapeur + salade croquante","snack":"","dinner":"Dorade en ceviche au fruit de la passion + courgettes au citron et champignons"},{"day":"Vendredi","week":10,"breakfast":"Fromage blanc + pomme + 1 c. à soupe d’amandes","lunch":"Entrée : Salade de gombo, tomate et oignon rouge • Plat : Escalope de veau citronnée + pois chiches citronnés + ratatouille","snack":"","dinner":"Ceviche de bar au citron vert + épinards sautés et champignons"},{"day":"Samedi","week":10,"breakfast":"Porridge au lait + banane + cannelle","lunch":"Entrée : Betterave, roquette et mozzarella • Plat : Tartare de thon citron-sésame + pommes grenaille + aubergines et tomates rôties","snack":"","dinner":"Filet mignon de porc grillé + poivrons grillés et aubergines"},{"day":"Dimanche","week":10,"breakfast":"Omelette aux fines herbes + pain complet + orange","lunch":"Entrée : Salade verte, avocat et graines • Plat : Brochettes de capitaine marinées + patate douce rôtie + chou braisé aux herbes","snack":"","dinner":"Carpaccio de thon sésame-citron + salade de chou et concombre"},{"day":"Lundi","week":11,"breakfast":"Yaourt grec nature + flocons d’avoine + fruit de la passion","lunch":"Entrée : Carottes râpées au gingembre et citron • Plat : Carpaccio de bar aux agrumes + boulgour complet + haricots verts","snack":"","dinner":"Langouste grillée aux herbes + asperges et salade de roquette"},{"day":"Mardi","week":11,"breakfast":"Pain complet + fromage frais + concombre + thé","lunch":"Entrée : Concombre à la menthe et yaourt léger • Plat : Escalope de veau citronnée + manioc vapeur + épinards sautés","snack":"","dinner":"Dinde marinée citron-thym + haricots verts à l’ail"},{"day":"Mercredi","week":11,"breakfast":"Œufs à la coque + tartine complète + pastèque","lunch":"Entrée : Salade de cœur de palmier et tomate • Plat : Tartare de thon citron-sésame + riz complet + brocoli vapeur","snack":"","dinner":"Langouste rôtie ail-persil + salade verte, avocat et tomate"},{"day":"Jeudi","week":11,"breakfast":"Overnight oats au yaourt + mangue + graines de chia","lunch":"Entrée : Champignons frais, roquette et citron • Plat : Brochettes de capitaine marinées + riz sauvage + poêlée de gombo et courgette","snack":"","dinner":"Tartare de thon à l’avocat + courgettes grillées et poivrons"},{"day":"Vendredi","week":11,"breakfast":"Fromage blanc + ananas + quelques noix","lunch":"Entrée : Salade de haricots verts et tomate • Plat : Ceviche de bar au citron vert + patate douce rôtie + légumes verts","snack":"","dinner":"Saumon rôti citron-aneth + salade de concombre, radis et menthe"},{"day":"Samedi","week":11,"breakfast":"Omelette tomate-oignon + pain complet + papaye","lunch":"Entrée : Ratatouille froide aux herbes • Plat : Filet de bœuf grillé au poivre + haricots rouges + courgettes et poivrons","snack":"","dinner":"Œufs cocotte aux épinards + salade roquette, concombre et avocat"},{"day":"Dimanche","week":11,"breakfast":"Muesli sans sucre + lait demi-écrémé + pomme","lunch":"Entrée : Salade de courgette, tomate et mozzarella • Plat : Ceviche de dorade mangue-avocat + riz basmati + carottes et courgettes rôties","snack":"","dinner":"Salade de poulet, avocat et mozzarella + carottes rôties et courgettes"},{"day":"Lundi","week":12,"breakfast":"Tartine complète + beurre de cacahuète fin + banane","lunch":"Entrée : Gaspacho de poivron rouge • Plat : Brochettes de capitaine marinées + riz complet + légumes méditerranéens","snack":"","dinner":"Dorade grillée sauce vierge + gombo sauté à la tomate"},{"day":"Mardi","week":12,"breakfast":"Yaourt nature + papaye + avoine + cannelle","lunch":"Entrée : Salade de chou blanc, concombre et citron • Plat : Ceviche de bar au citron vert + lentilles tièdes + salade croquante","snack":"","dinner":"Filet mignon de porc grillé + poêlée de gombo et poivrons"},{"day":"Mercredi","week":12,"breakfast":"Œufs brouillés aux champignons + pain complet + thé","lunch":"Entrée : Aubergine, tomate et basilic • Plat : Filet de bœuf grillé au poivre + semoule complète + ratatouille","snack":"","dinner":"Carpaccio de thon sésame-citron + tomates rôties et épinards"},{"day":"Jeudi","week":12,"breakfast":"Porridge pomme-cannelle + lait demi-écrémé","lunch":"Entrée : Salade de crudités tropicales • Plat : Ceviche de dorade mangue-avocat + haricots rouges + aubergines et tomates rôties","snack":"","dinner":"Ceviche de dorade mangue-avocat + salade tomate-mozzarella-basilic"},{"day":"Vendredi","week":12,"breakfast":"Avocat sur pain complet + œuf dur + orange","lunch":"Entrée : Tomates cerises, avocat et mozzarella • Plat : Langouste rôtie ail-persil + pommes grenaille + chou braisé aux herbes","snack":"","dinner":"Filet de bœuf grillé + courgettes au citron et champignons"},{"day":"Samedi","week":12,"breakfast":"Fromage blanc + mangue + quelques amandes","lunch":"Entrée : Salade de fenouil, concombre et citron • Plat : Langouste grillée aux herbes + quinoa + haricots verts","snack":"","dinner":"Langouste rôtie ail-persil + épinards sautés et champignons"},{"day":"Dimanche","week":12,"breakfast":"Crêpe d’avoine maison + yaourt nature + ananas","lunch":"Entrée : Carpaccio de tomate, mozzarella et basilic • Plat : Poulet yassa léger + lentilles tièdes + épinards sautés","snack":"","dinner":"Tartare de thon à l’avocat + poivrons grillés et aubergines"}];
const STARTERS=["Salade de concombre, radis et citron vert", "Tomates, mozzarella et basilic", "Carottes râpées à l’orange et coriandre", "Salade de courgettes crues, parmesan et citron", "Avocat, concombre et herbes fraîches", "Poivrons grillés marinés à l’ail", "Salade de chou rouge, pomme et citron", "Tomates cerises, mozzarella et roquette", "Carpaccio de courgette au citron", "Salade de betterave, feta et persil", "Concombre au yaourt, menthe et citron", "Aubergines grillées, tomate et basilic", "Salade de fenouil, orange et roquette", "Haricots verts en vinaigrette légère", "Salade de gombo, tomate et oignon rouge", "Courgettes grillées à la mozzarella", "Salade grecque légère", "Carottes et concombre au gingembre", "Tomates anciennes, avocat et basilic", "Champignons crus, roquette et parmesan", "Salade de chou blanc, carotte et citron", "Betterave, avocat et graines de sésame", "Ratatouille froide aux herbes", "Concombre, mozzarella et tomates cerises", "Salade de poivrons, concombre et coriandre", "Courgette, tomate et mozzarella", "Fenouil croquant au citron et persil", "Aubergine rôtie, yaourt et menthe", "Salade de tomate, concombre et oignon rouge", "Carpaccio de betterave à la mozzarella", "Salade de roquette, avocat et radis", "Poireaux vinaigrette légère", "Chou rouge, concombre et sésame", "Tomates, courgettes et basilic", "Salade de carotte, chou et coriandre", "Avocat farci aux crudités", "Concombre, radis et mozzarella", "Poivrons rôtis, roquette et parmesan", "Salade de courgette, avocat et citron", "Tomates cerises, concombre et menthe", "Betterave, roquette et mozzarella", "Salade de gombo croquant au citron", "Carpaccio de tomate et mozzarella", "Salade de fenouil, concombre et herbes", "Aubergines marinées au citron", "Courgettes rôties, roquette et mozzarella", "Salade de chou, avocat et citron vert", "Tomates, poivrons et basilic", "Concombre, avocat et graines de sésame", "Carottes râpées, pomme verte et citron", "Salade de betterave, concombre et menthe", "Champignons marinés, roquette et citron", "Tomates cerises, avocat et mozzarella", "Salade de courgettes, radis et basilic", "Poivrons grillés, tomate et mozzarella", "Fenouil, avocat et citron", "Salade de chou rouge, concombre et menthe", "Carpaccio de courgette, mozzarella et basilic", "Tomates, radis et roquette", "Aubergine grillée, concombre et yaourt", "Salade de gombo, avocat et tomate", "Betterave rôtie, roquette et feta", "Concombre, tomate et mozzarella", "Carottes, radis et coriandre", "Courgettes grillées, tomate et parmesan", "Salade de fenouil, radis et citron", "Poivrons marinés, avocat et roquette", "Tomates anciennes et mozzarella di bufala", "Chou blanc, concombre et yaourt citronné", "Aubergines rôties, tomates cerises et basilic", "Salade de courgette, fenouil et citron", "Avocat, tomate et oignon rouge", "Betterave, mozzarella et basilic", "Concombre, poivron et coriandre", "Carpaccio de tomate, avocat et roquette", "Salade de carotte, concombre et menthe", "Courgette crue, tomate cerise et mozzarella", "Poireaux, tomate et vinaigrette moutardée", "Salade de chou rouge, radis et citron", "Poivrons grillés, courgette et basilic", "Fenouil, tomate et mozzarella", "Salade de gombo, concombre et coriandre", "Aubergine, poivron et tomate grillés", "Avocat, radis et jeunes pousses"];
const IMG={"0_breakfast": "assets/food_pineapple.png", "0_lunch": "assets/food_fish.png", "0_dinner": "assets/food_eggs.png", "1_breakfast": "assets/food_papaya.png", "1_lunch": "assets/food_chicken.png", "1_dinner": "assets/food_fish.png", "2_breakfast": "assets/food_mango.png", "2_lunch": "assets/food_beef.png", "2_dinner": "assets/food_salad.png", "3_breakfast": "assets/food_eggs.png", "3_lunch": "assets/food_fish.png", "3_dinner": "assets/food_salad.png", "4_breakfast": "assets/food_apple.png", "4_lunch": "assets/food_salad.png", "4_dinner": "assets/food_fish.png", "5_breakfast": "assets/food_milk.png", "5_lunch": "assets/food_chicken.png", "5_dinner": "assets/food_fish.png", "6_breakfast": "assets/food_orange.png", "6_lunch": "assets/food_chicken.png", "6_dinner": "assets/food_chicken.png", "7_breakfast": "assets/food_passion.png", "7_lunch": "assets/food_beef.png", "7_dinner": "assets/food_fish.png", "8_breakfast": "assets/food_milk.png", "8_lunch": "assets/food_chicken.png", "8_dinner": "assets/food_fish.png", "9_breakfast": "assets/food_watermelon.png", "9_lunch": "assets/food_eggs.png", "9_dinner": "assets/food_chicken.png", "10_breakfast": "assets/food_mango.png", "10_lunch": "assets/food_beef.png", "10_dinner": "assets/food_fish.png", "11_breakfast": "assets/food_pineapple.png", "11_lunch": "assets/food_fish.png", "11_dinner": "assets/food_shrimp.png", "12_breakfast": "assets/food_papaya.png", "12_lunch": "assets/food_beef.png", "12_dinner": "assets/food_chicken.png", "13_breakfast": "assets/food_apple.png", "13_lunch": "assets/food_beef.png", "13_dinner": "assets/food_eggs.png", "14_breakfast": "assets/food_milk.png", "14_lunch": "assets/food_fish.png", "14_dinner": "assets/food_eggs.png", "15_breakfast": "assets/food_papaya.png", "15_lunch": "assets/food_beef.png", "15_dinner": "assets/food_eggs.png", "16_breakfast": "assets/food_eggs.png", "16_lunch": "assets/food_chicken.png", "16_dinner": "assets/food_chicken.png", "17_breakfast": "assets/food_apple.png", "17_lunch": "assets/food_chicken.png", "17_dinner": "assets/food_eggs.png", "18_breakfast": "assets/food_orange.png", "18_lunch": "assets/food_fish.png", "18_dinner": "assets/food_chicken.png", "19_breakfast": "assets/food_mango.png", "19_lunch": "assets/food_chicken.png", "19_dinner": "assets/food_eggs.png", "20_breakfast": "assets/food_pineapple.png", "20_lunch": "assets/food_shrimp.png", "20_dinner": "assets/food_eggs.png", "21_breakfast": "assets/food_pineapple.png", "21_lunch": "assets/food_fish.png", "21_dinner": "assets/food_eggs.png", "22_breakfast": "assets/food_papaya.png", "22_lunch": "assets/food_chicken.png", "22_dinner": "assets/food_fish.png", "23_breakfast": "assets/food_mango.png", "23_lunch": "assets/food_beef.png", "23_dinner": "assets/food_salad.png", "24_breakfast": "assets/food_eggs.png", "24_lunch": "assets/food_fish.png", "24_dinner": "assets/food_salad.png", "25_breakfast": "assets/food_apple.png", "25_lunch": "assets/food_salad.png", "25_dinner": "assets/food_fish.png", "26_breakfast": "assets/food_milk.png", "26_lunch": "assets/food_chicken.png", "26_dinner": "assets/food_fish.png", "27_breakfast": "assets/food_orange.png", "27_lunch": "assets/food_chicken.png", "27_dinner": "assets/food_chicken.png", "28_breakfast": "assets/food_passion.png", "28_lunch": "assets/food_beef.png", "28_dinner": "assets/food_fish.png", "29_breakfast": "assets/food_milk.png", "29_lunch": "assets/food_chicken.png", "29_dinner": "assets/food_fish.png", "30_breakfast": "assets/food_watermelon.png", "30_lunch": "assets/food_eggs.png", "30_dinner": "assets/food_chicken.png", "31_breakfast": "assets/food_mango.png", "31_lunch": "assets/food_beef.png", "31_dinner": "assets/food_fish.png", "32_breakfast": "assets/food_pineapple.png", "32_lunch": "assets/food_fish.png", "32_dinner": "assets/food_shrimp.png", "33_breakfast": "assets/food_papaya.png", "33_lunch": "assets/food_beef.png", "33_dinner": "assets/food_chicken.png", "34_breakfast": "assets/food_apple.png", "34_lunch": "assets/food_beef.png", "34_dinner": "assets/food_eggs.png", "35_breakfast": "assets/food_milk.png", "35_lunch": "assets/food_fish.png", "35_dinner": "assets/food_eggs.png", "36_breakfast": "assets/food_papaya.png", "36_lunch": "assets/food_beef.png", "36_dinner": "assets/food_eggs.png", "37_breakfast": "assets/food_eggs.png", "37_lunch": "assets/food_chicken.png", "37_dinner": "assets/food_chicken.png", "38_breakfast": "assets/food_apple.png", "38_lunch": "assets/food_chicken.png", "38_dinner": "assets/food_eggs.png", "39_breakfast": "assets/food_orange.png", "39_lunch": "assets/food_fish.png", "39_dinner": "assets/food_chicken.png", "40_breakfast": "assets/food_mango.png", "40_lunch": "assets/food_chicken.png", "40_dinner": "assets/food_eggs.png", "41_breakfast": "assets/food_pineapple.png", "41_lunch": "assets/food_shrimp.png", "41_dinner": "assets/food_eggs.png", "42_breakfast": "assets/food_pineapple.png", "42_lunch": "assets/food_fish.png", "42_dinner": "assets/food_eggs.png", "43_breakfast": "assets/food_papaya.png", "43_lunch": "assets/food_chicken.png", "43_dinner": "assets/food_fish.png", "44_breakfast": "assets/food_mango.png", "44_lunch": "assets/food_beef.png", "44_dinner": "assets/food_salad.png", "45_breakfast": "assets/food_eggs.png", "45_lunch": "assets/food_fish.png", "45_dinner": "assets/food_salad.png", "46_breakfast": "assets/food_apple.png", "46_lunch": "assets/food_salad.png", "46_dinner": "assets/food_fish.png", "47_breakfast": "assets/food_milk.png", "47_lunch": "assets/food_chicken.png", "47_dinner": "assets/food_fish.png", "48_breakfast": "assets/food_orange.png", "48_lunch": "assets/food_chicken.png", "48_dinner": "assets/food_chicken.png", "49_breakfast": "assets/food_passion.png", "49_lunch": "assets/food_beef.png", "49_dinner": "assets/food_fish.png", "50_breakfast": "assets/food_milk.png", "50_lunch": "assets/food_chicken.png", "50_dinner": "assets/food_fish.png", "51_breakfast": "assets/food_watermelon.png", "51_lunch": "assets/food_eggs.png", "51_dinner": "assets/food_chicken.png", "52_breakfast": "assets/food_mango.png", "52_lunch": "assets/food_beef.png", "52_dinner": "assets/food_fish.png", "53_breakfast": "assets/food_pineapple.png", "53_lunch": "assets/food_fish.png", "53_dinner": "assets/food_shrimp.png", "54_breakfast": "assets/food_papaya.png", "54_lunch": "assets/food_beef.png", "54_dinner": "assets/food_chicken.png", "55_breakfast": "assets/food_apple.png", "55_lunch": "assets/food_beef.png", "55_dinner": "assets/food_eggs.png", "56_breakfast": "assets/food_milk.png", "56_lunch": "assets/food_fish.png", "56_dinner": "assets/food_eggs.png", "57_breakfast": "assets/food_papaya.png", "57_lunch": "assets/food_beef.png", "57_dinner": "assets/food_eggs.png", "58_breakfast": "assets/food_eggs.png", "58_lunch": "assets/food_chicken.png", "58_dinner": "assets/food_chicken.png", "59_breakfast": "assets/food_apple.png", "59_lunch": "assets/food_chicken.png", "59_dinner": "assets/food_eggs.png", "60_breakfast": "assets/food_orange.png", "60_lunch": "assets/food_fish.png", "60_dinner": "assets/food_chicken.png", "61_breakfast": "assets/food_mango.png", "61_lunch": "assets/food_chicken.png", "61_dinner": "assets/food_eggs.png", "62_breakfast": "assets/food_pineapple.png", "62_lunch": "assets/food_shrimp.png", "62_dinner": "assets/food_eggs.png", "63_breakfast": "assets/food_pineapple.png", "63_lunch": "assets/food_fish.png", "63_dinner": "assets/food_eggs.png", "64_breakfast": "assets/food_papaya.png", "64_lunch": "assets/food_chicken.png", "64_dinner": "assets/food_fish.png", "65_breakfast": "assets/food_mango.png", "65_lunch": "assets/food_beef.png", "65_dinner": "assets/food_salad.png", "66_breakfast": "assets/food_eggs.png", "66_lunch": "assets/food_fish.png", "66_dinner": "assets/food_salad.png", "67_breakfast": "assets/food_apple.png", "67_lunch": "assets/food_salad.png", "67_dinner": "assets/food_fish.png", "68_breakfast": "assets/food_milk.png", "68_lunch": "assets/food_chicken.png", "68_dinner": "assets/food_fish.png", "69_breakfast": "assets/food_orange.png", "69_lunch": "assets/food_chicken.png", "69_dinner": "assets/food_chicken.png", "70_breakfast": "assets/food_passion.png", "70_lunch": "assets/food_beef.png", "70_dinner": "assets/food_fish.png", "71_breakfast": "assets/food_milk.png", "71_lunch": "assets/food_chicken.png", "71_dinner": "assets/food_fish.png", "72_breakfast": "assets/food_watermelon.png", "72_lunch": "assets/food_eggs.png", "72_dinner": "assets/food_chicken.png", "73_breakfast": "assets/food_mango.png", "73_lunch": "assets/food_beef.png", "73_dinner": "assets/food_fish.png", "74_breakfast": "assets/food_pineapple.png", "74_lunch": "assets/food_fish.png", "74_dinner": "assets/food_shrimp.png", "75_breakfast": "assets/food_papaya.png", "75_lunch": "assets/food_beef.png", "75_dinner": "assets/food_chicken.png", "76_breakfast": "assets/food_apple.png", "76_lunch": "assets/food_beef.png", "76_dinner": "assets/food_eggs.png", "77_breakfast": "assets/food_milk.png", "77_lunch": "assets/food_fish.png", "77_dinner": "assets/food_eggs.png", "78_breakfast": "assets/food_papaya.png", "78_lunch": "assets/food_beef.png", "78_dinner": "assets/food_eggs.png", "79_breakfast": "assets/food_eggs.png", "79_lunch": "assets/food_chicken.png", "79_dinner": "assets/food_chicken.png", "80_breakfast": "assets/food_apple.png", "80_lunch": "assets/food_chicken.png", "80_dinner": "assets/food_eggs.png", "81_breakfast": "assets/food_orange.png", "81_lunch": "assets/food_fish.png", "81_dinner": "assets/food_chicken.png", "82_breakfast": "assets/food_mango.png", "82_lunch": "assets/food_chicken.png", "82_dinner": "assets/food_eggs.png", "83_breakfast": "assets/food_pineapple.png", "83_lunch": "assets/food_shrimp.png", "83_dinner": "assets/food_eggs.png"};
const BONUS_STARTERS=["Salade de mâche, betterave et noix", "Carpaccio de champignons de Paris et parmesan", "Velouté froid de courgette à la menthe", "Salade de pousses d'épinards, orange et grenade", "Tomates cœur de bœuf, burrata légère et basilic", "Salade de radis, fenouil et pamplemousse", "Asperges vertes vapeur, vinaigrette citronnée", "Salade de chou kale, pomme verte et citron", "Carpaccio de betterave crue au cumin", "Salade de haricots verts, tomates séchées et amandes", "Concombre, pastèque et feta légère", "Salade de poivrons multicolores grillés", "Velouté froid de concombre à l'aneth", "Salade de roquette, figues et vinaigre balsamique", "Carottes et oranges à la fleur d'oranger", "Salade de champignons, noisettes et persil", "Tartare de tomates, câpres et échalote", "Salade de courgettes jaunes et vertes au citron", "Endives, pomme et noix en salade croquante", "Salade de betterave, orange et coriandre fraîche"];
const BONUS_LUNCHES=[{"entree": "Salade de mâche, betterave et noix", "plat": "Filet de cabillaud vapeur, citron et aneth + quinoa + haricots verts"}, {"entree": "Carpaccio de champignons de Paris et parmesan", "plat": "Poulet rôti aux herbes de Provence + riz complet + poêlée de courgettes"}, {"entree": "Velouté froid de courgette à la menthe", "plat": "Dinde sautée au paprika doux + boulgour complet + poivrons et oignons"}, {"entree": "Salade de pousses d'épinards, orange et grenade", "plat": "Pavé de saumon grillé + riz complet + brocoli vapeur"}, {"entree": "Tomates cœur de bœuf, burrata légère et basilic", "plat": "Filet de dorade en croûte d'herbes + patate douce rôtie + épinards"}, {"entree": "Salade de radis, fenouil et pamplemousse", "plat": "Sauté de bœuf au gingembre + riz complet + pak-choï"}, {"entree": "Asperges vertes vapeur, vinaigrette citronnée", "plat": "Brochettes de crevettes citron-ail + boulgour complet + courgettes grillées"}, {"entree": "Salade de chou kale, pomme verte et citron", "plat": "Escalope de dinde à la moutarde + lentilles corail + haricots verts"}, {"entree": "Carpaccio de betterave crue au cumin", "plat": "Filet de merlan meunière léger + riz complet + carottes vapeur"}, {"entree": "Salade de haricots verts, tomates séchées et amandes", "plat": "Poulet grillé au citron confit + pois chiches + ratatouille"}, {"entree": "Concombre, pastèque et feta légère", "plat": "Tajine de veau léger aux légumes + semoule complète + carottes"}, {"entree": "Salade de poivrons multicolores grillés", "plat": "Filet de sole vapeur + quinoa + fenouil braisé"}, {"entree": "Velouté froid de concombre à l'aneth", "plat": "Brochettes de dinde marinées au yaourt + riz complet + concombre grillé"}, {"entree": "Salade de roquette, figues et vinaigre balsamique", "plat": "Gambas au curry doux et lait de coco léger + riz complet + brocoli"}, {"entree": "Carottes et oranges à la fleur d'oranger", "plat": "Filet de bœuf grillé, sauce au poivre légère + patate douce + haricots verts"}, {"entree": "Salade de champignons, noisettes et persil", "plat": "Poulet basquaise + semoule complète + poivrons"}, {"entree": "Tartare de tomates, câpres et échalote", "plat": "Pavé de thon mi-cuit sésame + riz complet + edamame et carottes"}, {"entree": "Salade de courgettes jaunes et vertes au citron", "plat": "Filet de daurade en papillote citron-fenouil + boulgour complet + courgettes"}, {"entree": "Endives, pomme et noix en salade croquante", "plat": "Escalope de veau à l'estragon + lentilles vertes + haricots verts"}, {"entree": "Salade de betterave, orange et coriandre fraîche", "plat": "Poulet rôti au thym citron + riz complet + ratatouille"}];
const BONUS_DINNERS=["Filet de cabillaud vapeur, citron et aneth + poêlée de haricots verts et champignons", "Blanc de poulet grillé aux herbes + salade de concombre, menthe et citron", "Omelette aux asperges et fines herbes + salade de roquette et tomates", "Pavé de saumon grillé, sauce citron léger + épinards sautés à l'ail", "Filet de dorade en papillote de fenouil + courgettes grillées", "Carpaccio de bœuf mariné au citron + salade de roquette et parmesan", "Brochettes de crevettes au paprika + poêlée de poivrons et oignons", "Escalope de dinde grillée + salade de chou kale et pomme verte", "Filet de merlan vapeur, beurre de citron léger + brocoli vapeur", "Tartare de daurade au citron vert + salade de fenouil et orange", "Blanc de poulet au four, herbes de Provence + ratatouille", "Filet de sole vapeur + asperges vertes et champignons", "Œufs cocotte à la tomate et basilic + salade verte et concombre", "Gambas grillées à l'ail et au persil + poêlée de courgettes et champignons", "Filet de bœuf grillé au poivre + salade de betterave et roquette", "Poulet grillé au citron confit + poêlée d'aubergines et poivrons", "Pavé de thon mi-cuit au sésame + salade de chou rouge et carottes", "Carpaccio de saumon aux agrumes + salade de fenouil et radis", "Escalope de veau au citron + poêlée d'épinards et champignons", "Filet de cabillaud rôti aux herbes + salade de courgettes et menthe"];

const MENUS_DATA_VERSION='v6.0-recettes-detaillees';

// ---------- Migration des données v4.7 -> v6 ----------
(function migrate(){
  const map={v47_index:'v6_index',v47_overrides:'v6_overrides',v47_favorites:'v6_favorites',v47_results:'v6_results',v47_mode:'v6_mode',program_start_date:'program_start_date'};
  Object.entries(map).forEach(([oldK,newK])=>{
    if(localStorage.getItem(newK)===null && localStorage.getItem(oldK)!==null){
      localStorage.setItem(newK, localStorage.getItem(oldK));
    }
  });
})();

let M=[...BASE_M];
let i=+(localStorage.getItem('v6_index')||0);
const $=id=>document.getElementById(id);
const DAYMS=86400000;

function safeGet(k,fallback){try{const v=localStorage.getItem(k);return v?JSON.parse(v):fallback}catch(e){return fallback}}
function safeSet(k,v){localStorage.setItem(k,JSON.stringify(v))}

let overrides=safeGet('v6_overrides',{});
let favorites=safeGet('v6_favorites',{});
let results=safeGet('v6_results',[]);
let journal=safeGet('v6_journal',{});
let settings=safeGet('v6_settings',{servings:2,darkMode:false,pin:null,remindersEnabled:false,reminderTime:'19:00'});
let mode=localStorage.getItem('v6_mode')||'owner';
if(localStorage.getItem('v6_nextcycle')==='1' && M.length<=BASE_M.length){/* rebuilt below after functions defined */}

// ---------- Dates / statuts ----------
function parseStart(){
  const v=localStorage.getItem('program_start_date');
  if(!v)return null;
  const d=new Date(v+'T00:00:00');
  return isNaN(d)?null:d;
}
function todayMidnight(){const d=new Date();d.setHours(0,0,0,0);return d}
function dayNumberFromStart(){const s=parseStart();return s?Math.floor((todayMidnight()-s)/DAYMS):null}
function dateForIndex(idx){const s=parseStart();if(!s)return null;return new Date(s.getTime()+idx*DAYMS)}
function frDate(d){return d?d.toLocaleDateString('fr-FR',{weekday:'long',day:'numeric',month:'long',year:'numeric'}):''}
function totalWeeks(){return Math.ceil(M.length/7)}
function statusForIndex(idx){const n=dayNumberFromStart();if(n===null)return'future';if(idx<n)return'past';if(idx===n)return'current';return'future'}
function statusForWeek(w){const n=dayNumberFromStart();if(n===null)return'future';const cw=Math.floor(n/7)+1;if(w<cw)return'past';if(w===cw&&cw>=1&&cw<=totalWeeks())return'current';return'future'}

// ---------- Textes ----------
function cleanLunchMain(text){
  let s=(text||'').trim();
  if(/^entrée\s*:/i.test(s) && /[•|]\s*plat\s*:/i.test(s)){
    s=s.replace(/^.*?[•|]\s*plat\s*:\s*/i,'').trim();
  } else if(/^entrée\s*:/i.test(s) && /\bplat\s*:/i.test(s)){
    s=s.replace(/^.*?\bplat\s*:\s*/i,'').trim();
  }
  return s;
}
function escHtml(s){return String(s||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}

const ALL_STARTERS=[...STARTERS,...BONUS_STARTERS];
function starterForIndex(idx){
  const ov=overrides[idx+'_starter'];
  if(ov)return ov;
  if(STARTERS[idx])return STARTERS[idx];
  return ALL_STARTERS[idx % ALL_STARTERS.length]||'';
}

// ---------- Familles & images ----------
function mealFamily(text){
  const s=(text||'').toLowerCase();
  if(['crevette','gambas','langouste','crustacé'].some(k=>s.includes(k)))return'sea';
  if(['capitaine','dorade','daurade','cabillaud','merlan','saumon','thon','poisson','bar ','sole'].some(k=>s.includes(k)))return'fish';
  if(['poulet','dinde'].some(k=>s.includes(k)))return'poultry';
  if(['bœuf','boeuf','veau','filet mignon','steak','porc','tajine'].some(k=>s.includes(k)))return'meat';
  if(['œuf','oeuf','omelette','shakshuka','quiche'].some(k=>s.includes(k)))return'egg';
  return'veg';
}
function imageForText(text,slot){
 const s=(text||'').toLowerCase();
 if(slot==='breakfast'){
  if(s.includes('papaye'))return'assets/food_papaya.png';
  if(s.includes('mangue'))return'assets/food_mango.png';
  if(s.includes('ananas'))return'assets/food_pineapple.png';
  if(s.includes('pastèque'))return'assets/food_watermelon.png';
  if(s.includes('orange'))return'assets/food_orange.png';
  if(s.includes('passion'))return'assets/food_passion.png';
  if(s.includes('pomme'))return'assets/food_apple.png';
  if(['œuf','oeuf'].some(k=>s.includes(k)))return'assets/food_eggs.png';
  if(s.includes('lait')||s.includes('yaourt'))return'assets/food_milk.png';
  return'assets/food_breakfast_oats.png';
 }
 const fam=mealFamily(s);
 if(fam==='sea')return'assets/food_shrimp.png';
 if(fam==='fish')return'assets/food_fish.png';
 if(fam==='poultry')return'assets/food_chicken.png';
 if(fam==='meat')return'assets/food_beef.png';
 if(fam==='egg')return'assets/food_eggs.png';
 return'assets/food_salad.png';
}

// ---------- Ingrédients / quantités (recettes + courses) ----------
// dictionnaire de composants détectés dans les textes de menus, avec quantité de base pour 2 personnes
const COMPONENTS=[
 {re:/riz complet/i,label:'Riz complet',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Cuire le riz complet 25 à 30 minutes dans deux à trois fois son volume d’eau salée, puis égoutter.'},
 {re:/riz basmati/i,label:'Riz basmati',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Cuire le riz basmati 10 à 12 minutes dans l’eau bouillante salée, puis égoutter.'},
 {re:/riz sauvage/i,label:'Riz sauvage',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Cuire le riz sauvage 35 à 40 minutes à l’eau frémissante, puis égoutter.'},
 {re:/quinoa/i,label:'Quinoa',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Rincer le quinoa puis le cuire 12 à 15 minutes dans deux fois son volume d’eau.'},
 {re:/boulgour complet|boulgour/i,label:'Boulgour complet',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Cuire le boulgour 12 minutes dans l’eau bouillante salée, puis égoutter.'},
 {re:/semoule complète|semoule/i,label:'Semoule complète',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Verser la semoule dans un volume égal d’eau bouillante, couvrir 5 minutes puis égrainer à la fourchette.'},
 {re:/patate douce/i,label:'Patate douce',unit:'g',qty:250,cat:'Féculents & légumineuses',cook:'Couper la patate douce en morceaux, rôtir au four 25 minutes à 200 °C.'},
 {re:/pommes? grenaille/i,label:'Pommes de terre grenaille',unit:'g',qty:250,cat:'Féculents & légumineuses',cook:'Cuire les pommes grenaille à l’eau ou les rôtir au four 25 minutes.'},
 {re:/manioc/i,label:'Manioc',unit:'g',qty:250,cat:'Féculents & légumineuses',cook:'Cuire le manioc épluché 20 minutes à la vapeur.'},
 {re:/lentilles? (tièdes|verte|corail)?/i,label:'Lentilles',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Cuire les lentilles 20 à 25 minutes dans l’eau non salée, puis égoutter.'},
 {re:/pois chiches?/i,label:'Pois chiches',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Égoutter et rincer les pois chiches (cuits) ou les cuire 45 minutes s’ils sont secs.'},
 {re:/haricots rouges/i,label:'Haricots rouges',unit:'g',qty:150,cat:'Féculents & légumineuses',cook:'Égoutter et rincer les haricots rouges cuits, réchauffer doucement.'},
 {re:/pain complet/i,label:'Pain complet',unit:'tranche(s)',qty:1,cat:'Féculents & légumineuses',cook:'Toaster légèrement le pain complet si besoin.'},
 {re:/tartine complète/i,label:'Pain complet',unit:'tranche(s)',qty:1,cat:'Féculents & légumineuses',cook:'Toaster légèrement le pain complet si besoin.'},
 {re:/brocoli/i,label:'Brocoli',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Cuire le brocoli 6 à 8 minutes à la vapeur.'},
 {re:/épinards?/i,label:'Épinards',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Faire tomber les épinards 3 à 4 minutes dans une poêle avec un filet d’huile.'},
 {re:/courgettes?/i,label:'Courgettes',unit:'g',qty:250,cat:'Légumes & fruits',cook:'Couper les courgettes et les faire sauter ou griller 8 à 10 minutes.'},
 {re:/carottes?/i,label:'Carottes',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Cuire les carottes à la vapeur ou les rôtir au four 20 minutes.'},
 {re:/haricots verts/i,label:'Haricots verts',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Cuire les haricots verts 8 à 10 minutes à la vapeur.'},
 {re:/poivrons?/i,label:'Poivrons',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Émincer les poivrons et les faire sauter ou griller 8 minutes.'},
 {re:/aubergines?/i,label:'Aubergines',unit:'g',qty:250,cat:'Légumes & fruits',cook:'Couper les aubergines et les faire griller ou rôtir au four 20 minutes.'},
 {re:/gombo/i,label:'Gombo',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Faire sauter le gombo 8 à 10 minutes à feu moyen.'},
 {re:/chou\b/i,label:'Chou',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Émincer le chou et le faire braiser 10 minutes ou le servir cru en salade.'},
 {re:/champignons?/i,label:'Champignons',unit:'g',qty:150,cat:'Légumes & fruits',cook:'Faire revenir les champignons émincés 6 à 8 minutes à la poêle.'},
 {re:/asperges?/i,label:'Asperges',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Cuire les asperges 6 à 8 minutes à la vapeur ou à l’eau bouillante.'},
 {re:/fenouil/i,label:'Fenouil',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Émincer le fenouil, le servir cru ou le braiser 15 minutes.'},
 {re:/ratatouille/i,label:'Légumes pour ratatouille (courgette, aubergine, poivron, tomate)',unit:'g',qty:300,cat:'Légumes & fruits',cook:'Couper les légumes en dés et mijoter 25 à 30 minutes.'},
 {re:/tomates?/i,label:'Tomates',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Couper ou rôtir les tomates selon la recette.'},
 {re:/pak-choï/i,label:'Pak-choï',unit:'g',qty:200,cat:'Légumes & fruits',cook:'Faire sauter le pak-choï 4 à 5 minutes à feu vif.'},
 {re:/salade (verte|croquante|roquette)?/i,label:'Salade verte',unit:'g',qty:100,cat:'Légumes & fruits',cook:'Laver et essorer la salade.'},
 {re:/concombre/i,label:'Concombre',unit:'g',qty:150,cat:'Légumes & fruits',cook:'Couper le concombre en rondelles ou en dés.'},
 {re:/avocat/i,label:'Avocat',unit:'pièce(s)',qty:1,cat:'Légumes & fruits',cook:'Couper l’avocat en tranches ou en dés au dernier moment.'},
 {re:/mozzarella/i,label:'Mozzarella légère',unit:'g',qty:125,cat:'Autres',cook:'Égoutter et couper la mozzarella.'},
];
function servingsFactor(){return (settings.servings||2)/2}
function detectComponents(text){
  const found=[];
  COMPONENTS.forEach(c=>{if(c.re.test(text))found.push(c)});
  return found;
}
function proteinLine(mainText){
  const fam=mealFamily(mainText);
  const base={sea:{label:'Gambas / crustacés',unit:'g',qty:175},fish:{label:'Poisson',unit:'g',qty:170},poultry:{label:'Poulet ou dinde',unit:'g',qty:160},meat:{label:'Bœuf, veau ou porc',unit:'g',qty:160},egg:{label:'Œufs',unit:'pièce(s)',qty:2},veg:null}[fam];
  return base;
}

// ---------- Recettes bespoke pour les 20 nouveaux déjeuners / dîners ----------
const BONUS_RECIPES={};
BONUS_LUNCHES.forEach(l=>{
  BONUS_RECIPES[l.plat.toLowerCase()]=null; // sera rempli par le générateur générique enrichi, cf recipeDetails
});

function recipeDetails(title){
  const s=(title||'').toLowerCase();
  const factor=servingsFactor();
  const servings=(settings.servings||2)+' personne(s)';
  let time='30 min', ingredients=[], steps=[], tips=[];
  const add=(...x)=>ingredients.push(...x);
  const step=(...x)=>steps.push(...x);
  const fmtQty=(q,unit)=>{
    const v=Math.round(q*factor*10)/10;
    return (unit==='pièce(s)')? (v+' '+unit) : (v+' '+unit);
  };

  if(/ceviche/.test(s)){
    time='25 min + 15 min au frais';
    add(fmtQty(300,'g')+' de poisson ultra-frais (bar, dorade ou poisson indiqué)',fmtQty(3,'pièce(s)')+' de citrons verts','1/2 petit oignon rouge','1/2 concombre','2 c. à soupe de coriandre fraîche ciselée','1 c. à soupe d’huile d’olive','Sel fin et poivre');
    if(s.includes('mangue')) add('1/2 mangue mûre mais ferme');
    if(s.includes('avocat')) add('1 avocat');
    if(s.includes('passion')) add('2 fruits de la passion');
    step('Retirer soigneusement peau et arêtes du poisson. Le couper en dés réguliers d’environ 1,5 cm et le maintenir très froid.',
         'Presser les citrons verts. Émincer très finement l’oignon rouge. Couper le concombre et les éventuels fruits en petits dés.',
         'Mettre le poisson dans un saladier froid, ajouter oignon, concombre, coriandre et garnitures.',
         'Verser le jus de citron vert et l’huile d’olive. Saler très légèrement, poivrer et mélanger délicatement.',
         'Réserver 10 à 15 minutes au réfrigérateur seulement.',
         'Rectifier l’assaisonnement et servir immédiatement bien frais.');
    tips=['Utiliser impérativement un poisson adapté à la consommation crue et respecter la chaîne du froid.'];
  } else if(/carpaccio/.test(s) && /bar|thon|saumon|poisson|bœuf|boeuf/.test(s)){
    time='20 min';
    if(/bœuf|boeuf/.test(s)){
      add(fmtQty(250,'g')+' de filet de bœuf très frais','1 citron','2 c. à soupe d’huile d’olive','copeaux de parmesan','Fleur de sel et poivre');
    } else {
      add(fmtQty(250,'g')+' de poisson très frais, qualité consommation crue','1 citron vert','2 c. à soupe d’huile d’olive','1 c. à soupe de ciboulette ou coriandre','1 petite échalote','Fleur de sel et poivre');
    }
    step('Placer la pièce 15 à 20 minutes au congélateur pour la raffermir sans la congeler.',
         'Tailler de très fines tranches et les disposer sans les superposer sur assiettes froides.',
         'Mélanger jus de citron, huile d’olive et herbes ou échalote.',
         'Verser l’assaisonnement juste avant de servir, ajouter fleur de sel et poivre.');
    tips=['Servir immédiatement, sans laisser mariner longtemps.'];
  } else if(/tartare/.test(s)){
    time='20 min';
    if(/bœuf|boeuf/.test(s)){
      add(fmtQty(300,'g')+' de filet de bœuf très frais haché au couteau','1 échalote','2 c. à soupe de câpres','1 c. à café de moutarde','1 c. à soupe d’huile d’olive','Sel et poivre');
    } else {
      add(fmtQty(300,'g')+' de poisson très frais, qualité consommation crue','1 citron vert','1 petite échalote','2 c. à soupe de coriandre ou ciboulette','1 c. à soupe d’huile d’olive','1 c. à café de moutarde douce','Sel et poivre');
    }
    if(s.includes('avocat')) add('1 avocat');
    step('Parer puis couper la pièce au couteau en petits dés réguliers, réserver au froid.',
         'Hacher finement l’échalote et les herbes.',
         'Mélanger huile, moutarde et jus de citron.',
         'Incorporer délicatement la protéine et les aromates. Saler et poivrer.',
         'Dresser à l’emporte-pièce et servir immédiatement.');
    tips=['Préparer au dernier moment et conserver au froid.'];
  } else if(/langouste/.test(s)){
    time='35 min';
    add(fmtQty(2,'pièce(s)')+' queues de langouste (250-300 g chacune)','2 gousses d’ail','1 citron','2 c. à soupe d’huile d’olive','2 c. à soupe de persil frais','Sel et poivre');
    step('Préchauffer le four à 200 °C ou préparer un gril bien chaud.',
         'Fendre les queues de langouste, retirer le boyau et éponger la chair.',
         'Mélanger huile, ail écrasé, persil, zeste et jus de citron. Badigeonner la chair.',
         'Cuire 10 à 14 minutes au four, ou 3-4 minutes côté chair puis 5-7 minutes côté carapace au gril.',
         'Servir aussitôt avec les légumes prévus au menu.');
    tips=['Éviter la surcuisson pour garder une chair juteuse.'];
  } else if(/gambas|crevette/.test(s)){
    time='25 min';
    add(fmtQty(350,'g')+' de gambas ou grosses crevettes','2 gousses d’ail','1 citron vert','1 c. à soupe d’huile d’olive','1 c. à café de paprika','2 c. à soupe de persil ou coriandre','Sel et poivre');
    if(/curry/.test(s)) add('1 c. à café de curry doux','10 cl de lait de coco léger');
    step('Décortiquer les gambas, retirer le boyau dorsal puis les éponger.',
         'Mélanger huile, ail, paprika (ou curry et lait de coco), citron et herbes.',
         'Enrober les gambas et laisser reposer 10 minutes au frais.',
         'Cuire 2 à 3 minutes par face dans une poêle ou un wok très chaud.',
         'Servir avec les légumes ou l’accompagnement du menu.');
    tips=['Ne pas prolonger la cuisson pour rester tendre.'];
  } else if(/dorade|daurade|capitaine|saumon|thon|bar\b|poisson|cabillaud|sole|merlan/.test(s)){
    time='35 min';
    add(fmtQty(2,'pièce(s)')+' filets de poisson (150-180 g chacun)','1 citron','1 c. à soupe d’huile d’olive','1 gousse d’ail','1 c. à café de thym ou herbes fraîches','Sel et poivre');
    if(/papillote/.test(s)) add('2 feuilles de papier cuisson');
    if(/sésame/.test(s)) add('1 c. à soupe de graines de sésame');
    step('Vérifier qu’il ne reste aucune arête. Éponger les filets, assaisonner de sel, poivre, ail, herbes et citron.',
         /papillote/.test(s)?'Déposer chaque filet sur du papier cuisson avec un filet d’huile et des rondelles de citron. Fermer hermétiquement.':'Badigeonner légèrement le poisson d’huile d’olive.',
         /papillote/.test(s)?'Cuire 12 à 16 minutes à 190 °C.':'Cuire 3 à 5 minutes par face à la poêle ou au gril, ou 12 à 18 minutes au four à 190 °C selon l’épaisseur.',
         'Pendant la cuisson, préparer les légumes et, au déjeuner seulement, le féculent indiqué.',
         'Vérifier que le poisson se détache facilement tout en restant moelleux.',
         'Dresser avec les accompagnements et un trait de citron frais.');
    tips=['Adapter le temps de cuisson à l’épaisseur du filet.'];
  } else if(/poulet|dinde/.test(s)){
    time='40 min';
    add(fmtQty(320,'g')+' de poulet ou dinde','1 c. à soupe d’huile d’olive','1/2 citron','1 gousse d’ail','1 c. à café de thym','1/2 c. à café de paprika','Sel et poivre');
    if(/yassa/.test(s)) add('2 gros oignons','1 c. à café de moutarde');
    if(/basquaise/.test(s)) add('1 poivron rouge','2 tomates','1/2 oignon');
    step('Parer la volaille et la couper si nécessaire en morceaux réguliers.',
         'Mélanger huile, citron, ail, thym, paprika, sel et poivre. Enrober la viande et laisser mariner 15 minutes.',
         /yassa/.test(s)?'Faire fondre les oignons émincés 10 minutes, ajouter la moutarde puis la volaille et un petit verre d’eau.':'Saisir la volaille 3 à 4 minutes par face.',
         /basquaise/.test(s)?'Ajouter oignon, poivron et tomates émincés, couvrir et laisser mijoter 20 minutes.':'Poursuivre la cuisson à feu moyen jusqu’à cuisson complète.',
         'Préparer en parallèle les légumes et l’éventuel féculent du déjeuner.',
         'Vérifier que la volaille est cuite à cœur et servir chaud.');
    tips=['La volaille doit toujours être complètement cuite à cœur.'];
  } else if(/bœuf|boeuf|veau|porc|filet mignon|steak|tajine/.test(s)){
    time='35 à 45 min';
    add(fmtQty(320,'g')+' de viande indiquée','1 c. à soupe d’huile d’olive','1 gousse d’ail','1 petite échalote','1 c. à café de thym ou romarin','Sel et poivre');
    if(/tajine/.test(s)) add('1 c. à café de cumin','1 c. à café de cannelle','1 carotte supplémentaire');
    step('Sortir la viande du réfrigérateur 15 minutes avant cuisson, la parer et l’éponger.',
         'Assaisonner avec poivre, ail et herbes (et épices pour le tajine).',
         /tajine|mijot|filet mignon/.test(s)?'Faire colorer la viande sur toutes les faces, ajouter l’échalote, verser 10 cl d’eau ou de bouillon léger, couvrir et laisser mijoter doucement jusqu’à tendreté.':'Saisir dans une poêle bien chaude, adapter le temps à la cuisson souhaitée.',
         'Préparer séparément les légumes et l’accompagnement indiqué.',
         'Laisser reposer la viande 3 à 5 minutes avant de trancher.',
         'Dresser avec les accompagnements et servir.');
    tips=['Pour le porc, veiller à une cuisson complète.'];
  } else if(/omelette|œuf|oeuf|shakshuka/.test(s)){
    time='20 à 25 min';
    add(fmtQty(4,'pièce(s)')+' œufs','1 c. à café d’huile d’olive','1 petite échalote','2 c. à soupe d’herbes fraîches','Sel et poivre');
    if(/shakshuka/.test(s)) add('3 tomates mûres','1/2 poivron','1/2 oignon','1/2 c. à café de cumin');
    step(/shakshuka/.test(s)?'Émincer oignon et poivron, les revenir 5 minutes, ajouter tomates concassées et cumin, mijoter 10 minutes.':'Préparer les légumes indiqués et les faire revenir doucement.',
         /shakshuka/.test(s)?'Former quatre creux dans la sauce et y casser les œufs.':'Battre les œufs avec les herbes, sel et poivre.',
         /shakshuka/.test(s)?'Couvrir et cuire 5 à 7 minutes.':'Verser les œufs sur les légumes, cuire à feu doux.',
         'Préparer la salade ou les légumes d’accompagnement.',
         'Servir immédiatement.');
    tips=['Une cuisson douce donne des œufs plus moelleux.'];
  } else {
    time='20 min';
    const mozzarella=/mozzarella/.test(s);
    add(fmtQty(350,'g')+' au total des légumes indiqués','1 c. à soupe d’huile d’olive','1 c. à soupe de jus de citron ou vinaigre','1 c. à soupe d’herbes fraîches','Sel et poivre');
    if(mozzarella) add(fmtQty(125,'g')+' de mozzarella égouttée');
    if(/avocat/.test(s)) add('1 avocat mûr');
    if(/yaourt/.test(s)) add('100 g de yaourt nature');
    step('Laver soigneusement tous les légumes et les sécher avant de les tailler.',
         /grill|rôti|rôtie/.test(s)?'Couper les légumes, les badigeonner légèrement d’huile puis les griller ou rôtir à 200 °C.':'Émincer ou couper les légumes en morceaux réguliers.',
         mozzarella?'Égoutter la mozzarella, la couper et l’ajouter aux légumes.':'Préparer les autres éléments mentionnés dans le titre.',
         'Mélanger huile, citron ou vinaigre, herbes, sel et poivre pour une vinaigrette légère.',
         'Assembler juste avant le service.',
         'Rectifier l’assaisonnement et servir frais ou tiède.');
    tips=['Assaisonner au dernier moment pour conserver le croquant.'];
  }

  // accompagnements détectés (riz, légumes...) ajoutés avec quantités et méthode de cuisson
  const comps=detectComponents(title);
  comps.forEach(c=>{
    add(fmtQty(c.qty,c.unit)+' de '+c.label.toLowerCase());
    step(c.cook);
  });

  return {title,ingredients:[...new Set(ingredients)],steps,time,servings,tips};
}

function openRecipe(title, kind){
  const r=recipeDetails(title);
  $('recipeKind').textContent=kind;
  $('recipeTitle').textContent=r.title;
  $('recipeMeta').textContent=r.servings+' • '+r.time;
  $('recipeIngredients').innerHTML=r.ingredients.map(x=>'<li>'+escHtml(x.replace(/^•\s*/,''))+'</li>').join('');
  $('recipeSteps').innerHTML=r.steps.map(x=>'<li>'+escHtml(x)+'</li>').join('');
  $('recipeTips').innerHTML=(r.tips||[]).map(x=>'<li>'+escHtml(x)+'</li>').join('');
  $('recipeTipsBlock').style.display=(r.tips&&r.tips.length)?'block':'none';
  $('recipeModal').classList.add('open');
  document.body.classList.add('recipe-open');
}
function closeRecipe(){
  $('recipeModal').classList.remove('open');
  document.body.classList.remove('recipe-open');
}

function lunchHTML(idx){
  const starter=starterForIndex(idx), main=cleanLunchMain(currentMeal(idx,'lunch'));
  return '<span class="lunch-course"><b>🥗 Entrée</b><br>'+escHtml(starter)+
         '<button class="recipe-btn" onclick="openRecipe(starterForIndex('+idx+'),\'Recette de l’entrée\')">📖 Recette complète</button></span>'+
         '<span class="lunch-course"><b>🍽️ Plat</b><br>'+escHtml(main)+
         '<button class="recipe-btn" onclick="openRecipe(cleanLunchMain(currentMeal('+idx+',\'lunch\')),\'Recette du déjeuner\')">📖 Recette complète</button></span>';
}

function originalMeal(idx,slot){return M[idx]?.[slot]||''}
function currentMeal(idx,slot){return overrides[idx+'_'+slot]||originalMeal(idx,slot)}

function fullDinnerPool(){return [...BASE_M.map(x=>x.dinner),...BONUS_DINNERS]}
function fullLunchPool(){return [...BASE_M.map(x=>cleanLunchMain(x.lunch)),...BONUS_LUNCHES.map(x=>x.plat)]}
const STARCH_RE=/riz|pain|pâtes|pomme de terre|pommes de terre|pommes? grenaille|patate|manioc|semoule|quinoa|lentille|haricots rouges|pois chiche|boulgour|couscous/i;

function alternative(idx,slot){
  const cur=currentMeal(idx,slot), fam=mealFamily(slot==='lunch'?cleanLunchMain(cur):cur);
  let pool=(slot==='lunch'?fullLunchPool():fullDinnerPool());
  if(slot==='dinner')pool=pool.filter(x=>!STARCH_RE.test(x)); // garde-fou : jamais de féculent au dîner
  pool=[...new Set(pool.filter(x=>mealFamily(x)===fam && x!==(slot==='lunch'?cleanLunchMain(cur):cur)))];
  if(!pool.length)return;
  const key='v6_altpos_'+idx+'_'+slot, pos=(+(localStorage.getItem(key)||-1)+1)%pool.length;
  localStorage.setItem(key,pos);
  if(slot==='lunch'){
    overrides[idx+'_lunch']='Entrée : '+starterForIndex(idx)+' • Plat : '+pool[pos];
    const bonusMatch=BONUS_LUNCHES.find(l=>l.plat===pool[pos]);
    if(bonusMatch) overrides[idx+'_starter']=bonusMatch.entree;
  } else {
    overrides[idx+'_dinner']=pool[pos];
  }
  safeSet('v6_overrides',overrides);draw();
}
function changeStarter(idx){
  const cur=starterForIndex(idx);
  const pool=ALL_STARTERS.filter(x=>x!==cur);
  if(!pool.length)return;
  const key='v6_altstart_'+idx, pos=(+(localStorage.getItem(key)||-1)+1)%pool.length;
  localStorage.setItem(key,pos);
  overrides[idx+'_starter']=pool[pos];
  safeSet('v6_overrides',overrides);draw();
}
function resetMeal(idx,slot){delete overrides[idx+'_'+slot];if(slot==='lunch')delete overrides[idx+'_starter'];safeSet('v6_overrides',overrides);draw()}
function favKey(idx,slot){return idx+'_'+slot}
function toggleFavorite(idx,slot){
 const k=favKey(idx,slot);
 if(favorites[k]) delete favorites[k];
 else favorites[k]={text:slot==='lunch'?cleanLunchMain(currentMeal(idx,slot)):currentMeal(idx,slot),slot,week:M[idx]?.week||Math.floor(idx/7)+1,day:M[idx]?.day||'',added:new Date().toISOString()};
 safeSet('v6_favorites',favorites);draw();renderFavorites();
}
function updateFavButton(btn,idx,slot){const on=!!favorites[favKey(idx,slot)];btn.textContent=on?'♥':'♡';btn.classList.toggle('faved',on)}

// ---------- Alerte répétition de protéines ----------
function familyRepeatWarning(idx,slot){
  if(idx<=0)return'';
  const today=slot==='lunch'?cleanLunchMain(currentMeal(idx,'lunch')):currentMeal(idx,'dinner');
  const yesterday=slot==='lunch'?cleanLunchMain(currentMeal(idx-1,'lunch')):currentMeal(idx-1,'dinner');
  const fam=mealFamily(today);
  if(fam!=='veg' && fam===mealFamily(yesterday))return'⚠️ Même famille de protéines qu’hier ('+({sea:'crustacés',fish:'poisson',poultry:'volaille',meat:'viande',egg:'œufs'}[fam]||fam)+').';
  return'';
}

// ---------- Semaines ----------
function weekTabs(){
 const box=$('weekTabs');box.innerHTML='';
 for(let w=1;w<=totalWeeks();w++){
  const b=document.createElement('button');b.textContent='S'+w;
  const st=statusForWeek(w);b.className=(M[i]?.week===w?'on ':'')+st;
  b.onclick=()=>{i=Math.min(M.length-1,(w-1)*7);save()};
  box.appendChild(b);
 }
 setTimeout(()=>{const a=box.querySelector('.on');if(a)a.scrollIntoView({behavior:'smooth',inline:'center',block:'nearest'})},0);
}

// ---------- Vue jour ----------
function draw(){
 if(i<0)i=0;if(i>=M.length)i=M.length-1;
 const m=M[i], ds=statusForIndex(i), labels={past:'Passé',current:'Aujourd’hui',future:'À venir'};
 $('dayTitle').textContent=m.day;
 const d=dateForIndex(i);
 $('dateTitle').textContent=d?frDate(d)+' • Jour '+(i+1)+'/'+M.length:'Jour '+(i+1)+'/'+M.length;
 $('weekTitle').innerHTML='Semaine '+m.week+' • Cycle '+Math.ceil(m.week/4)+' <span class="timebadge '+ds+'">'+labels[ds]+'</span>';
 const dn=document.querySelector('.daynav');dn.classList.remove('pastday','currentday','futureday');dn.classList.add(ds==='past'?'pastday':ds==='current'?'currentday':'futureday');

 const breakfast=m.breakfast||'';
 if(breakfast){$('breakfastCard').style.display='';$('breakfastText').textContent=breakfast;$('breakfastImg').src=imageForText(breakfast,'breakfast');$('breakfastPhotoLabel').textContent=breakfast.split('+')[0].trim();}
 else{$('breakfastCard').style.display='none';}

 const lunch=cleanLunchMain(currentMeal(i,'lunch')), dinner=currentMeal(i,'dinner');
 $('lunchText').innerHTML=lunchHTML(i);
 $('dinnerText').innerHTML=escHtml(dinner)+'<button class="recipe-btn" onclick="openRecipe(currentMeal('+i+',\'dinner\'),\'Recette du dîner\')">📖 Recette complète</button>';
 $('lunchImg').src=imageForText(lunch,'lunch');$('dinnerImg').src=imageForText(dinner,'dinner');
 $('lunchPhotoLabel').textContent=lunch.split('+')[0].split(',')[0].trim();
 $('dinnerPhotoLabel').textContent=dinner.split('+')[0].split(',')[0].trim();
 $('shoppingWeek').textContent='Semaine '+m.week;
 $('shoppingServings').textContent=String(settings.servings||2);
 updateFavButton($('favLunch'),i,'lunch');updateFavButton($('favDinner'),i,'dinner');
 $('programSubtitle').textContent=totalWeeks()+' semaines • '+M.length+' jours';

 const wl=familyRepeatWarning(i,'lunch'), wd=familyRepeatWarning(i,'dinner');
 $('warnLunch').style.display=wl?'block':'none';$('warnLunch').textContent=wl;
 $('warnDinner').style.display=wd?'block':'none';$('warnDinner').textContent=wd;

 renderJournalInputs(i);
 weekTabs();renderShopping();renderCycleReview();
}
function save(){localStorage.setItem('v6_index',i);draw()}
$('prev').onclick=()=>{i=(i+M.length-1)%M.length;save()};
$('next').onclick=()=>{i=(i+1)%M.length;save()};
$('changeLunch').onclick=()=>alternative(i,'lunch');$('changeDinner').onclick=()=>alternative(i,'dinner');
$('changeStarter').onclick=()=>changeStarter(i);
$('resetLunch').onclick=()=>resetMeal(i,'lunch');$('resetDinner').onclick=()=>resetMeal(i,'dinner');
$('favLunch').onclick=()=>toggleFavorite(i,'lunch');$('favDinner').onclick=()=>toggleFavorite(i,'dinner');
let sx=0;$('menus').addEventListener('touchstart',e=>sx=e.changedTouches[0].screenX,{passive:true});
$('menus').addEventListener('touchend',e=>{const d=e.changedTouches[0].screenX-sx;if(Math.abs(d)>55){i=d<0?(i+1)%M.length:(i+M.length-1)%M.length;save()}},{passive:true});

// ---------- Journal quotidien ----------
function renderJournalInputs(idx){
  const j=journal[idx]||{};
  $('journalOk').classList.toggle('on',j.status==='ok');
  $('journalAdapt').classList.toggle('on',j.status==='adapte');
  $('journalHunger').value=j.hunger||3;
  $('journalNote').value=j.note||'';
  $('journalStatus').textContent=j.savedAt?('Enregistré le '+new Date(j.savedAt).toLocaleString('fr-FR')):'';
}
function saveJournal(){
  const j=journal[i]||{};
  j.hunger=+$('journalHunger').value;
  j.note=$('journalNote').value;
  j.savedAt=new Date().toISOString();
  journal[i]=j;safeSet('v6_journal',journal);
  $('journalStatus').textContent='Enregistré le '+new Date(j.savedAt).toLocaleString('fr-FR');
}
$('journalOk').onclick=()=>{journal[i]=journal[i]||{};journal[i].status='ok';saveJournal();renderJournalInputs(i)};
$('journalAdapt').onclick=()=>{journal[i]=journal[i]||{};journal[i].status='adapte';saveJournal();renderJournalInputs(i)};
$('journalHunger').onchange=saveJournal;
$('journalNote').onblur=saveJournal;

// ---------- Vues ----------
function setView(id){
 document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));$(id).classList.add('active');
 document.querySelectorAll('.bottom button').forEach(b=>b.classList.toggle('on',b.dataset.view===id));
 if(id==='favoris')renderFavorites();
 if(id==='suivi')renderResults();
 if(id==='semaine')renderWeekGrid();
}
document.querySelectorAll('.bottom button').forEach(b=>b.onclick=()=>setView(b.dataset.view));

function renderWeekGrid(){
  const week=M[i].week;
  const days=M.map((m,idx)=>({...m,idx})).filter(m=>m.week===week);
  $('weekGridTitle').textContent='Semaine '+week;
  $('weekGrid').innerHTML=days.map(d=>'<button class="weekgrid-day" data-idx="'+d.idx+'"><b>'+d.day+'</b><small>🍴 '+escHtml(cleanLunchMain(currentMeal(d.idx,'lunch')).split('+')[0].trim())+'</small><small>🌙 '+escHtml(currentMeal(d.idx,'dinner').split('+')[0].trim())+'</small></button>').join('');
  $('weekGrid').querySelectorAll('.weekgrid-day').forEach(b=>b.onclick=()=>{i=+b.dataset.idx;save();setView('menus')});
}

// ---------- Mode Consultation / PIN ----------
function applyModeUI(){
  document.body.classList.toggle('viewer',mode==='viewer');
  $('ownerMode').classList.toggle('on',mode==='owner');$('viewerMode').classList.toggle('on',mode==='viewer');
  if(mode==='viewer'&&['suivi','reglages'].includes(document.querySelector('.view.active')?.id))setView('menus');
}
function setMode(newMode){
 if(newMode==='owner' && mode==='viewer' && settings.pin){
   openPinModal();return;
 }
 mode=newMode;localStorage.setItem('v6_mode',mode);applyModeUI();
}
$('ownerMode').onclick=()=>setMode('owner');$('viewerMode').onclick=()=>setMode('viewer');
function openPinModal(){$('pinCheckInput').value='';$('pinCheckStatus').textContent='';$('pinModal').classList.add('open')}
function closePinModal(){$('pinModal').classList.remove('open')}
$('pinCheckBtn').onclick=()=>{
  if($('pinCheckInput').value===settings.pin){mode='owner';localStorage.setItem('v6_mode',mode);applyModeUI();closePinModal();}
  else{$('pinCheckStatus').textContent='Code incorrect.'}
};
$('savePin').onclick=()=>{
  const v=$('pinInput').value.trim();
  if(!/^\d{4}$/.test(v)){$('pinStatus').textContent='Le code doit contenir 4 chiffres.';return}
  settings.pin=v;safeSet('v6_settings',settings);$('pinInput').value='';$('pinStatus').textContent='Code enregistré.';
};
$('clearPin').onclick=()=>{settings.pin=null;safeSet('v6_settings',settings);$('pinStatus').textContent='Code retiré.'};

// ---------- Recherche ----------
$('searchBtn').onclick=()=>{$('searchModal').classList.add('open');$('searchInput').value='';$('searchResults').innerHTML='';$('searchInput').focus()};
function closeSearch(){$('searchModal').classList.remove('open')}
function searchMenus(q){
  q=q.trim().toLowerCase();if(q.length<2)return[];
  const out=[];
  M.forEach((m,idx)=>{
    const starter=starterForIndex(idx), lunch=cleanLunchMain(currentMeal(idx,'lunch')), dinner=currentMeal(idx,'dinner'), bf=m.breakfast||'';
    const hay=(starter+' '+lunch+' '+dinner+' '+bf).toLowerCase();
    if(hay.includes(q))out.push({idx,week:m.week,day:m.day,starter,lunch,dinner});
  });
  return out;
}
$('searchInput').addEventListener('input',e=>{
  const res=searchMenus(e.target.value);
  $('searchResults').innerHTML=res.length?res.map(r=>'<button class="search-result" data-idx="'+r.idx+'"><b>'+r.day+' • S'+r.week+'</b><small>🥗 '+escHtml(r.starter)+'</small><small>🍴 '+escHtml(r.lunch)+'</small><small>🌙 '+escHtml(r.dinner)+'</small></button>').join(''):'<p class="hint">Aucun résultat.</p>';
  $('searchResults').querySelectorAll('.search-result').forEach(b=>b.onclick=()=>{i=+b.dataset.idx;save();closeSearch();setView('menus')});
});

// ---------- Liste de courses (avec quantités) ----------
function ingredientsForWeek(week){
  const days=M.map((m,idx)=>({...m,idx})).filter(m=>m.week===week);
  const texts=days.flatMap(m=>[starterForIndex(m.idx),cleanLunchMain(currentMeal(m.idx,'lunch')),currentMeal(m.idx,'dinner')]);
  const factor=servingsFactor();
  const agg={}; // key: label -> {qty,unit,cat}
  texts.forEach(t=>{
    detectComponents(t).forEach(c=>{
      const key=c.label;
      if(!agg[key])agg[key]={qty:0,unit:c.unit,cat:c.cat};
      agg[key].qty+=c.qty*factor;
    });
  });
  days.forEach(m=>{
    [cleanLunchMain(currentMeal(m.idx,'lunch')),currentMeal(m.idx,'dinner')].forEach(t=>{
      const p=proteinLine(t);
      if(p){const key=p.label;if(!agg[key])agg[key]={qty:0,unit:p.unit,cat:'Protéines'};agg[key].qty+=p.qty*factor;}
    });
  });
  const byCat={};
  Object.entries(agg).forEach(([label,v])=>{
    byCat[v.cat]=byCat[v.cat]||[];
    const qty=Math.round(v.qty);
    byCat[v.cat].push(label+' — '+(v.unit==='pièce(s)'?qty+' '+v.unit:qty+' '+v.unit));
  });
  return byCat;
}
function renderShopping(){
 const week=M[i].week, data=ingredientsForWeek(week), box=$('shopping');box.innerHTML='';
 Object.entries(data).forEach(([cat,items])=>{
  if(!items.length)return;
  const sec=document.createElement('section');sec.className='shop-section';sec.innerHTML='<h3>'+cat+'</h3><ul></ul>';
  const ul=sec.querySelector('ul');
  items.forEach((x,xi)=>{const key='v6_shop_'+week+'_'+cat+'_'+x,li=document.createElement('li'),checked=localStorage.getItem(key)==='1';li.innerHTML='<input type="checkbox" '+(checked?'checked':'')+'><span>'+x+'</span>';li.querySelector('input').onchange=e=>localStorage.setItem(key,e.target.checked?'1':'0');ul.appendChild(li)});
  box.appendChild(sec);
 });
 if(!box.children.length)box.innerHTML='<div class="shop-empty">Aucun ingrédient détecté.</div>';
}
$('generateShopping').onclick=renderShopping;
$('resetChecks').onclick=()=>{Object.keys(localStorage).filter(k=>k.startsWith('v6_shop_'+M[i].week+'_')).forEach(k=>localStorage.removeItem(k));renderShopping()};

// ---------- Favoris ----------
function renderFavorites(){
 const box=$('favoritesList'), entries=Object.entries(favorites);box.innerHTML='';
 if(!entries.length){box.innerHTML='<div class="empty-card">Aucun favori pour le moment. Touchez ♡ sur un déjeuner ou un dîner.</div>';return}
 entries.sort((a,b)=>(b[1].added||'').localeCompare(a[1].added||'')).forEach(([k,f])=>{
  const d=document.createElement('div');d.className='favorite-card';d.innerHTML='<b>'+f.text+'</b><small>'+f.day+' • Semaine '+f.week+' • '+(f.slot==='lunch'?'Déjeuner':'Dîner')+'</small><br><button>Retirer des favoris</button>';
  d.querySelector('button').onclick=()=>{delete favorites[k];safeSet('v6_favorites',favorites);renderFavorites();draw()};
  box.appendChild(d);
 });
}

// ---------- Suivi ----------
const sd=$('programStartDate'),sbtn=$('saveStartDate'),gbtn=$('goToday'),sstat=$('startDateStatus');
const savedStart=localStorage.getItem('program_start_date');if(savedStart)sd.value=savedStart;
sbtn.onclick=()=>{if(!sd.value){sstat.textContent='Choisissez une date.';return}localStorage.setItem('program_start_date',sd.value);sstat.textContent='Date enregistrée.';draw()};
gbtn.onclick=()=>{const n=dayNumberFromStart();if(n===null){sstat.textContent='Enregistrez d’abord la date de départ.';return}i=Math.min(M.length-1,Math.max(0,n));save();setView('menus')};

function saveResult(){
 const date=$('resultDate').value,weight=parseFloat($('weightResult').value),fat=parseFloat($('fatResult').value),waist=parseFloat($('waistResult').value);
 if(!date||!Number.isFinite(weight)){$('resultStatus').textContent='Date et poids sont nécessaires.';return}
 results.push({date,weight,fat:Number.isFinite(fat)?fat:null,waist:Number.isFinite(waist)?waist:null});
 results.sort((a,b)=>a.date.localeCompare(b.date));safeSet('v6_results',results);
 $('weightResult').value='';$('fatResult').value='';$('waistResult').value='';$('resultStatus').textContent='Mesure ajoutée.';renderResults();
}
$('saveResult').onclick=saveResult;
$('resultDate').value=new Date().toISOString().slice(0,10);

function renderResults(){
 const hist=$('resultHistory');hist.innerHTML='';
 results.forEach((r,idx)=>{const row=document.createElement('div');row.className='result-row';row.innerHTML='<span>'+new Date(r.date+'T00:00:00').toLocaleDateString('fr-FR')+'</span><b>'+r.weight.toFixed(1)+' kg</b><span>'+(r.fat!==null?r.fat.toFixed(1)+' %':'—')+'</span><span>'+(r.waist!=null&&r.waist!==undefined?r.waist.toFixed(1)+' cm':'—')+'</span><button>×</button>';row.querySelector('button').onclick=()=>{results.splice(idx,1);safeSet('v6_results',results);renderResults()};hist.appendChild(row)});
 const sum=$('resultSummary');
 if(results.length>=2){const a=results[0],b=results[results.length-1],dw=b.weight-a.weight,df=(a.fat!=null&&b.fat!=null)?b.fat-a.fat:null,dwa=(a.waist!=null&&b.waist!=null)?b.waist-a.waist:null;
   sum.innerHTML='<b>Évolution depuis la première mesure</b><br>Poids : '+(dw>0?'+':'')+dw.toFixed(1)+' kg'+(df!==null?'<br>Masse grasse : '+(df>0?'+':'')+df.toFixed(1)+' point(s)':'')+(dwa!==null?'<br>Tour de taille : '+(dwa>0?'+':'')+dwa.toFixed(1)+' cm':'');}
 else sum.textContent=results.length?'Ajoutez au moins une deuxième mesure pour afficher l’évolution.':'Aucune mesure enregistrée.';
 drawChart();
}
function drawChart(){
 const c=$('resultChart'),ctx=c.getContext('2d'),W=c.width,H=c.height;ctx.clearRect(0,0,W,H);ctx.fillStyle=settings.darkMode?'#12201a':'#fff';ctx.fillRect(0,0,W,H);
 if(results.length<2){ctx.fillStyle='#78847f';ctx.font='14px sans-serif';ctx.fillText('Ajoutez au moins 2 mesures pour afficher la courbe.',20,95);return}
 const vals=results.map(r=>r.weight),min=Math.min(...vals)-.5,max=Math.max(...vals)+.5;
 ctx.strokeStyle='#dbe7df';ctx.lineWidth=1;for(let y=25;y<H-20;y+=35){ctx.beginPath();ctx.moveTo(35,y);ctx.lineTo(W-10,y);ctx.stroke()}
 ctx.strokeStyle='#11804e';ctx.lineWidth=3;ctx.beginPath();
 results.forEach((r,idx)=>{const x=35+idx*(W-55)/(results.length-1),y=15+(max-r.weight)*(H-40)/(max-min||1);idx?ctx.lineTo(x,y):ctx.moveTo(x,y)});
 ctx.stroke();ctx.fillStyle='#11804e';results.forEach((r,idx)=>{const x=35+idx*(W-55)/(results.length-1),y=15+(max-r.weight)*(H-40)/(max-min||1);ctx.beginPath();ctx.arc(x,y,4,0,Math.PI*2);ctx.fill()});
 const waists=results.filter(r=>r.waist!=null);
 if(waists.length>=2){
   const wv=waists.map(r=>r.waist),wmin=Math.min(...wv)-1,wmax=Math.max(...wv)+1;
   ctx.strokeStyle='#c98a2e';ctx.lineWidth=2;ctx.beginPath();
   results.forEach((r,idx)=>{if(r.waist==null)return;const x=35+idx*(W-55)/(results.length-1),y=15+(wmax-r.waist)*(H-40)/(wmax-wmin||1);ctx.lineTo?ctx.lineTo(x,y):null});
   ctx.stroke();
   ctx.fillStyle='#78847f';ctx.font='11px sans-serif';ctx.fillText('— Poids (vert)   — Tour de taille (orange)',35,H-6);
 }
}

// ---------- Export PDF du suivi ----------
$('printSuivi').onclick=()=>{
  const rowsHtml=results.map(r=>'<tr><td>'+new Date(r.date+'T00:00:00').toLocaleDateString('fr-FR')+'</td><td>'+r.weight.toFixed(1)+' kg</td><td>'+(r.fat!=null?r.fat.toFixed(1)+' %':'—')+'</td><td>'+(r.waist!=null?r.waist.toFixed(1)+' cm':'—')+'</td></tr>').join('');
  const journalRows=Object.entries(journal).filter(([,j])=>j.note||j.status).sort((a,b)=>+a[0]-+b[0]).map(([idx,j])=>{const m=M[+idx];return '<tr><td>'+(m?m.day+' S'+m.week:idx)+'</td><td>'+(j.status==='ok'?'Suivi tel quel':j.status==='adapte'?'Adapté':'—')+'</td><td>'+(j.hunger||'—')+'/5</td><td>'+escHtml(j.note||'')+'</td></tr>'}).join('');
  $('trackPrintSheet').innerHTML='<div class="print-head"><h1>Mes Menus — Suivi</h1><p>Exporté le '+new Date().toLocaleDateString('fr-FR')+'</p></div>'+
   '<h2>Historique des mesures</h2><table class="print-table"><tr><th>Date</th><th>Poids</th><th>Masse grasse</th><th>Tour de taille</th></tr>'+rowsHtml+'</table>'+
   (journalRows?'<h2>Journal</h2><table class="print-table"><tr><th>Jour</th><th>Statut</th><th>Faim</th><th>Note</th></tr>'+journalRows+'</table>':'');
  document.body.classList.add('printing-track');
  setTimeout(()=>window.print(),80);
};
window.addEventListener('afterprint',()=>document.body.classList.remove('printing-track','printing-week'));

// ---------- Cycle suivant (corrigé) ----------
function renderCycleReview(){
 const n=dayNumberFromStart(),msg=$('cycleMessage'),box=$('cycleReview');
 if(n!==null&&n>=BASE_M.length){box.classList.add('cycle-ready');msg.innerHTML='<b>Les '+Math.round(BASE_M.length/7)+' semaines sont terminées.</b> Enregistrez votre mesure finale puis préparez un cycle complémentaire. L’application ne modifie pas automatiquement les quantités du programme.'}
 else{box.classList.remove('cycle-ready');const left=n===null?BASE_M.length:Math.max(0,BASE_M.length-n);msg.textContent=n===null?'Définissez une date de démarrage pour suivre la fin du cycle.':left+' jour(s) avant la fin du programme initial.'}
}
function buildNextCycle(){
 if(M.length>BASE_M.length){i=BASE_M.length;save();setView('menus');return}
 const favLunchTexts=Object.values(favorites).filter(f=>f.slot==='lunch').map(f=>f.text);
 const favDinnerTexts=Object.values(favorites).filter(f=>f.slot==='dinner').map(f=>f.text);
 // sécurité : jamais de féculent au dîner, même via un favori
 const lunches=[...new Set([...favLunchTexts,...fullLunchPool()])];
 const dinners=[...new Set([...favDinnerTexts,...fullDinnerPool()])].filter(x=>!STARCH_RE.test(x));
 const dayNames=['Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi','Dimanche'];
 const extra=[];
 for(let k=0;k<28;k++){
   const idx=BASE_M.length+k;
   extra.push({day:dayNames[k%7],week:Math.floor(BASE_M.length/7)+1+Math.floor(k/7),breakfast:BASE_M[idx%BASE_M.length]?.breakfast||'',lunch:'Entrée : '+ALL_STARTERS[idx%ALL_STARTERS.length]+' • Plat : '+lunches[(k*5+3)%lunches.length],snack:'',dinner:dinners[(k*7+2)%dinners.length]});
 }
 M=[...BASE_M,...extra];localStorage.setItem('v6_nextcycle','1');i=BASE_M.length;save();setView('menus');
}
$('buildNextCycle').onclick=buildNextCycle;
if(localStorage.getItem('v6_nextcycle')==='1')buildNextCycle();

// ---------- Impression semaine (recettes) ----------
function printCurrentWeek(){
 const week=M[i].week;
 const days=M.map((m,idx)=>({...m,idx})).filter(m=>m.week===week);
 const sheet=$('weekPrintSheet');
 sheet.innerHTML='<div class="print-head"><h1>Mes Menus — Semaine '+week+'</h1><p>Petit-déjeuner, entrée, déjeuner et dîner, du lundi au dimanche</p></div>'+
  days.map(m=>'<article class="print-day"><h2>'+m.day+'</h2>'+(m.breakfast?'<div><b>☀️ Petit-déjeuner</b><p>'+m.breakfast+'</p></div>':'')+'<div><b>🥗 Entrée</b><p>'+starterForIndex(m.idx)+'</p></div><div><b>🍴 Plat du déjeuner</b><p>'+cleanLunchMain(currentMeal(m.idx,'lunch'))+'</p></div><div><b>🌙 Dîner</b><p>'+currentMeal(m.idx,'dinner')+'</p></div></article>').join('');
 document.body.classList.add('printing-week');
 setTimeout(()=>window.print(),80);
}
$('printWeek').onclick=printCurrentWeek;

// ---------- Réglages : portions / dark mode / export / import ----------
$('servingsInput').value=settings.servings||2;
$('servingsInput').onchange=()=>{settings.servings=Math.max(1,Math.min(8,+$('servingsInput').value||2));safeSet('v6_settings',settings);draw()};
$('darkModeToggle').checked=!!settings.darkMode;
document.body.classList.toggle('dark',!!settings.darkMode);
$('darkModeToggle').onchange=()=>{settings.darkMode=$('darkModeToggle').checked;safeSet('v6_settings',settings);document.body.classList.toggle('dark',settings.darkMode);drawChart()};

$('exportData').onclick=()=>{
  const dump={};
  Object.keys(localStorage).forEach(k=>{if(k.startsWith('v6_')||k==='program_start_date')dump[k]=localStorage.getItem(k)});
  dump._exportedAt=new Date().toISOString();dump._version=MENUS_DATA_VERSION;
  const blob=new Blob([JSON.stringify(dump,null,2)],{type:'application/json'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='mes-menus-sauvegarde-'+new Date().toISOString().slice(0,10)+'.json';a.click();
  $('dataStatus').textContent='Export prêt au téléchargement.';
};
$('importData').onchange=e=>{
  const file=e.target.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=()=>{
    try{
      const data=JSON.parse(reader.result);
      Object.entries(data).forEach(([k,v])=>{if(k.startsWith('_'))return;localStorage.setItem(k,v)});
      $('dataStatus').textContent='Import réussi. Rechargement…';
      setTimeout(()=>location.reload(),700);
    }catch(err){$('dataStatus').textContent='Fichier invalide.'}
  };
  reader.readAsText(file);
};

// ---------- Rappels (best effort, app ouverte uniquement) ----------
$('remindersToggle').checked=!!settings.remindersEnabled;
$('reminderTime').value=settings.reminderTime||'19:00';
$('remindersToggle').onchange=()=>{
  settings.remindersEnabled=$('remindersToggle').checked;
  if(settings.remindersEnabled && 'Notification' in window && Notification.permission==='default')Notification.requestPermission();
  safeSet('v6_settings',settings);
};
$('reminderTime').onchange=()=>{settings.reminderTime=$('reminderTime').value;safeSet('v6_settings',settings)};
setInterval(()=>{
  if(!settings.remindersEnabled||!('Notification' in window)||Notification.permission!=='granted')return;
  const now=new Date(),hhmm=now.toTimeString().slice(0,5),today=now.toISOString().slice(0,10);
  if(hhmm===(settings.reminderTime||'19:00') && localStorage.getItem('v6_lastReminder')!==today){
    new Notification('Mes Menus',{body:'C’est l’heure de consulter votre menu du jour 🌿'});
    localStorage.setItem('v6_lastReminder',today);
  }
},30000);

// ---------- Démarrage ----------
applyModeUI();renderResults();draw();renderFavorites();
if('serviceWorker'in navigator)addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
