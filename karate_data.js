/* This file is part of the Karate-App5 project.
 * Karate-App5 is a free and unencumbered software released into the public domain.
 * For more information, please refer to <http://unlicense.org/>
 */

var karate_data = {
	positions: {
		name: 'cette position',
		list: [
			{ name: 'HEISOKU DACHI'                       , description: 'Debout les pieds l\'un contre l\'autre.' },
			{ name: 'MUSUBI DACHI'                        , description: 'Debout, talons joints, pointes des pieds écartées' },
			{ name: 'REINOJI DACHI'                       , description: 'Debout un pied devant l\'autre formant un L' },
			{ name: 'TEÏJI DACHI'                         , description: 'Debout un pied devant l\'autre formant un T' },
			{ name: 'HEIKO DACHI'                         , description: 'Debout pieds écartés et parallèles' },
			{ name: 'HACHIJI DACHI'                       , description: 'Debout pieds pointés vers l\'extérieur écartés de la largeur des hanches' },
			{ name: 'UCHI HACHIJI DACHI'                  , description: 'Debout pieds pointés vers l\'intérieur écartés de la largeur des hanches' },
			{ name: 'ZENKUTSU DACHI'                      , description: 'Fente avant : jambe avant fléchie, jambe arrière tendue.' },
			{ name: 'KOKUTSU DACHI'                       , description: 'Fente arrière 70% du poids du corps sur la jambe arrière' },
			{ name: 'KIBA DACHI'                          , description: 'Position du cavalier' },
			{ name: 'SHIKO DACHI'                         , description: 'Position du sumotori' },
			{ name: 'FUDO DACHI'                          , description: 'Position équilibrée de combat (entre Zen kutsu et Kokutsu)' },
			{ name: 'NEKO ASHI DACHI'                     , description: 'Position du chat' },
			{ name: 'KOSA DACHI ou KAKE DACHI'            , description: 'Position pieds croisés' },
			{ name: 'MOTO DACHI'                          , description: 'Position fondamentale (petit Zenkutsu)' },
			{ name: 'SANCHIN DACHI'                       , description: 'Position du "sablier" ou des trois centres' },
			{ name: 'HANGETSU DACHI ou SEISHAN DACHI'     , description: 'Position du "sablier" élargie' },
			{ name: 'TSURU ASHI DACHI ou SAGI ASHI DACHI' , description: 'Debout sur une jambe'}
		]
	},
	deplacements: {
		name: 'ce déplacement',
		list: [
			{ name: 'AYUMI ASHI ou DE ASHI'    , description: 'Avancer d\'un pas' },
			{ name: 'HIKI ASHI'                , description: 'Reculer d\'un pas' },
			{ name: 'YORI ASHI'                , description: 'Pas glissé' },
			{ name: 'TSUGI ASHI'               , description: 'Pas chassé' },
			{ name: 'OKURI ASHI'               , description: 'Double pas' },
			{ name: 'MAWASHI ASHI'             , description: 'Déplacement tournant autour du pied avant' },
			{ name: 'USHIRO MAWASHI ASHI'      , description: 'Déplacement tournant autour du pied arrière' }
		]
	},
	defenses: {
		name: 'ce blocage',
		list: [
			{ name: 'GEDAN BARAI'          , description: 'Défense basse par un mouvement de balayage avec le bras' },
			{ name: 'JODAN AGE UKE'        , description: 'Défense haute par un mouvement remontant avec le bras' },
			{ name: 'SOTO UDE UKE'         , description: 'Défense avec le bras dans un mouvement de l\'extérieur vers l\'intérieur' },
			{ name: 'UCHI UDE UKE'         , description: 'Défense avec le bras dans un mouvement de l\'intérieur vers l\'extérieur' },
			{ name: 'SHUTO UKE'            , description: 'Défense avec le tranchant de la main' },
			{ name: 'OSAE UKE'             , description: 'Défense par pression ou immobilisation avec la main' },
			{ name: 'HAISHU UKE'           , description: 'Défense avec le dos de la main' },
			{ name: 'TEISHO UKE'           , description: 'Défense avec la paume' },
			{ name: 'JUJI UKE ou KOSA UKE' , description: 'Défense double avec les deux bras croisés' },
			{ name: 'KAKIWAKE UKE'         , description: 'Défense double en écartant' },
			{ name: 'MOROTE UKE'           , description: 'Défense double, bras arrière en protection' },
			{ name: 'HEIKO UKE'            , description: 'Défense double avec les deux bras parallèles' },
			{ name: 'SUKUI  UKE'           , description: 'Défense en puisant' },
			{ name: 'NAGASHI UKE'          , description: 'Défense brossée en accompagnant l\'attaque avec la main ou le bras' },
			{ name: 'OTOSHI UKE'           , description: 'Défense en frappant avec l\'avant-bras vers le bas' },
			{ name: 'KOKEN UKE'            , description: 'Défense avec le poignet' }
		]
	},
	attaque_poings: {
		name: 'cette attaque de poings',
		list: [
			{ name: 'CHOKU ZUKI'                , description: 'Coup de poing fondamental' },
			{ name: 'GYAKU ZUKI'                , description: 'Coup de poing avec le bras inverse à la jambe avancée' },
			{ name: 'OI ZUKI ou JUN ZUKI'       , description: 'Coup de poing en poursuite avec un pas' },
			{ name: 'MAETE ZUKI'                , description: 'Coup de poing avec le poing avant' },
			{ name: 'KIZAMI ZUKI'               , description: 'Coup de poing avec le poing avant en effaçant le buste' },
			{ name: 'NAGASHI ZUKI'              , description: 'Coup de poing avec le poing avant en esquivant' },
			{ name: 'TATE ZUKI'                 , description: 'Coup de poing avec le poing vertical' },
			{ name: 'URA ZUKI'                  , description: 'Coup de poing, paume tournée vers le haut' },
			{ name: 'KAGI ZUKI'                 , description: 'Coup de poing en crochet' },
			{ name: 'MAWASHI ZUKI ou FURI ZUKI' , description: 'Coup de poing circulaire' },
			{ name: 'YAMA ZUKI'                 , description: 'Coup de poing double, simultanément jodan et gedan' },
			{ name: 'MOROTE ZUKI'               , description: 'Coup de poing double au même niveau' },
			{ name: 'NUKITE'                    , description: 'Attaque directe en pique de main' },
			{ name: 'AGE ZUKI'                  , description: 'Coup de poing remontant' }
		]
	},
	attaque_percussion: {
		name: 'cette attaque de percussion',
		list: [
			{ name: 'URAKEN UCHI'            , description: 'Attaque circulaire avec le dos du poing' },
			{ name: 'SHUTO UCHI'             , description: 'Attaque circulaire avec le tranchant de la main' },
			{ name: 'TETSUI UCHI'            , description: 'Attaque circulaire avec la main en marteau, "éminence d\'hypothénar"' },
			{ name: 'ENPI UCHI ou HIJI UCHI' , description: 'Attaque avec le coude' },
			{ name: 'HAÏTO UCHI'             , description: 'Attaque avec le tranchant interne de la main (côté pouce)' },
			{ name: 'TEISHO UCHI'            , description: 'Attaque avec la paume' },
			{ name: 'KOKEN UCHI'             , description: 'Attaque avec le dessus du poignet' },
			{ name: 'HAÏSHU UCHI'            , description: 'Attaque avec le dos de la main' }
		]
	},
	attaque_pieds: {
		name: 'cette attaque de pieds',
		list: [
			{ name: 'MAE GERI'            , description: 'Coup de pied de face' },
			{ name: 'MAWASHI GERI'        , description: 'Coup de pied circulaire (fouetté)' },
			{ name: 'YOKO GERI KEKOMI'    , description: 'Coup de pied latéral pénétrant' },
			{ name: 'YOKO GERI KEAGE'     , description: 'Coup de pied latéral remontant' },
			{ name: 'MIKAZUKI GERI'       , description: 'Coup de pied en croissant' },
			{ name: 'URA MIKAZUKI GERI'   , description: 'Coup de pied en croissant inverse' },
			{ name: 'USHIRO GERI'         , description: 'Coup de pied vers l\'arrière' },
			{ name: 'FUMIKOMI'            , description: 'Coup de pied écrasant' },
			{ name: 'FUMIKIRI'            , description: 'Coup de pied bas (dans l\'idée de couper)' },
			{ name: 'TOBI GERI'           , description: 'Coup de pied sauté' },
			{ name: 'ASHI BARAI'          , description: 'Balayage' },
			{ name: 'URA MAWASHI GERI'    , description: 'Coup de pied en revers tournant' },
			{ name: 'USHIRO MAWASHI GERI' , description: 'Balayage tournant par l\'arrière' },
			{ name: 'HIZA ou HITSUI GERI' , description: 'Coup de genou' },
			{ name: 'NAMI GAESHI'         , description: 'Coup de pied en vague  (mouvement remontant avec la plante du pied)' },
			{ name: 'KAKATO GERI'         , description: 'Coup de talon de haut en bas' }
		]
	}
};
