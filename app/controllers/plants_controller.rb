class PlantsController < ApplicationController

  def index
    plants = Plant.all 
    render json: plants
  end

  def create
    plant = Plant.create(plant_params)
    render json: plant, status: :created
  end

  def update
    plant = Plant.find(params[:id])
    plant.update(plant_params)
    render json: plant, status: :accepted
  end

  private
  
  def plant_params
    params.permit(:name, :image, :price, :sold, :details, :user_id)
  end 

end