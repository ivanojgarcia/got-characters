import React from 'react';

const CharactersRowDetail = ({characterDetail}) => {
    return (
        <>
        <section className="py-8"><div className="container px-4 mx-auto">
            {
                characterDetail.data.map(character => {
                    let titles = character.titles.split(","); 
                    return (
                        <div key={character.id} className="p-10 mb-4 bg-white shadow rounded">
                            <div className="flex flex-wrap items-center -mx-4">
                                <div className="w-full lg:w-3/12 flex px-4 mb-6 lg:mb-0">
                                <img className="w-10 h-10 mr-4 object-cover object-top rounded-full" src={character.imageLink || "https://www.seekpng.com/png/detail/55-554939_game-of-thrones-logo-stencil.png"} alt="dummy" /><div>
                                    <p className="text-sm font-medium">{character.name}</p>
                                    <p className="text-xs text-gray-500">{character.gender}</p>
                                </div>
                                </div>
                                <div className="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0"><a className="py-1 px-2 text-xs text-indigo-500 bg-indigo-50 rounded-full" href="#">{character.house}</a></div>
                                <div className="w-1/2 lg:w-2/12 px-4 mb-6 lg:mb-0">
                                <p className="text-sm font-medium">Shuffle</p>
                                </div>
                                <div className="w-full lg:w-4/12 px-4 mb-6 lg:mb-0">
                                    {
                                       titles.map(title => (
                                        <span className="inline-block py-1 px-2 mr-2 mb-1 lg:mb-0 text-xs border rounded">{title || "Not Title"}</span>
                                       )) 
                                    }
                                </div>
                                <div className="w-full lg:w-1/12 px-4">
                                <div className="flex items-center">
                                    <a className="p-2 mr-3 bg-purple-100 rounded" href="#">
                                    <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5602 5.21334L3.22683 0.546671C2.85849 0.363344 2.44258 0.298078 2.03579 0.359772C1.629 0.421466 1.25114 0.607118 0.953719 0.891415C0.656301 1.17571 0.4538 1.54482 0.373827 1.94841C0.293853 2.352 0.340299 2.77044 0.506832 3.14667L2.10683 6.72667C2.14314 6.81322 2.16183 6.90614 2.16183 7C2.16183 7.09386 2.14314 7.18678 2.10683 7.27334L0.506832 10.8533C0.371298 11.1578 0.314002 11.4913 0.34015 11.8236C0.366297 12.1558 0.47506 12.4763 0.656553 12.7558C0.838046 13.0353 1.08652 13.2651 1.37938 13.4241C1.67224 13.5832 2.00022 13.6666 2.3335 13.6667C2.64565 13.6636 2.95316 13.5907 3.2335 13.4533L12.5668 8.78667C12.8979 8.62013 13.1762 8.36487 13.3706 8.04939C13.5651 7.7339 13.668 7.3706 13.668 7C13.668 6.62941 13.5651 6.2661 13.3706 5.95062C13.1762 5.63513 12.8979 5.37988 12.5668 5.21334H12.5602ZM11.9668 7.59334L2.6335 12.26C2.51094 12.3188 2.37332 12.3388 2.23909 12.3172C2.10486 12.2956 1.98044 12.2335 1.88251 12.1392C1.78458 12.0449 1.71782 11.9229 1.69119 11.7896C1.66455 11.6563 1.67932 11.518 1.7335 11.3933L3.32683 7.81334C3.34746 7.76553 3.36527 7.71656 3.38017 7.66667H7.9735C8.15031 7.66667 8.31988 7.59643 8.4449 7.47141C8.56993 7.34638 8.64016 7.17681 8.64016 7C8.64016 6.82319 8.56993 6.65362 8.4449 6.5286C8.31988 6.40357 8.15031 6.33334 7.9735 6.33334H3.38017C3.36527 6.28345 3.34746 6.23448 3.32683 6.18667L1.7335 2.60667C1.67932 2.48198 1.66455 2.3437 1.69119 2.21038C1.71782 2.07706 1.78458 1.95507 1.88251 1.86077C1.98044 1.76647 2.10486 1.70436 2.23909 1.68277C2.37332 1.66119 2.51094 1.68116 2.6335 1.74L11.9668 6.40667C12.076 6.46262 12.1677 6.54761 12.2317 6.6523C12.2957 6.75699 12.3295 6.87731 12.3295 7C12.3295 7.1227 12.2957 7.24302 12.2317 7.34771C12.1677 7.45239 12.076 7.53739 11.9668 7.59334V7.59334Z" fill="#382CDD" /></svg></a>
                                </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
            </section>            
        </>
    );
};

export default CharactersRowDetail;