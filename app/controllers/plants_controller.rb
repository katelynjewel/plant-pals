class PlantsController < ApplicationController
  skip_before_action :authorize, only: :create

  def index
    plants = Plant.all 
    render json: plants
  end

  def show
    plant = Plant.find(params[:id])
    render json: plant, status: :ok
  end

  def create
    plant = Plant.create!(plant_params)
    render json: plant, status: :created
  end

  def update
    plant = Plant.find(params[:id])
    plant.update(plant_params)
    render json: plant, status: :accepted
  end

  private
  
  def plant_params
    params.permit(:name, :price, :sold, :details, :user_id, :image)
  end 

end